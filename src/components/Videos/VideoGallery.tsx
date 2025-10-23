import { useState, useMemo } from "react";
import VideoCard from "./VideoCard";
import { searchVideos } from "../../utils/search";
import type { Video } from "../../utils/search";
import FilterMenu from "../Addons/FilterMenu";
import type { Filter } from "../Addons/FilterMenu";
import "@/styles/components/Videos/_VideoGallery.scss";

interface VideoGalleryProps {
    videos: Video[]
    query: string
}

// Return to base order (based on prio) for each focus
const getBasePrioORder = (focus: number) => {
    switch (focus) {
        case 1:
            return [1, 2, 3];
        case 2:
            return [2, 3, 1];
        case 3:
            return [3, 1, 2];
        default:
            return [1, 2, 3];
    }
};

const VideoGallery = ({ videos, query }: VideoGalleryProps) => {

    // Filter state
    const [filter, setFilter] = useState<Filter>({
        type: "year",
        prioFocus: null,
        order: "desc",
    });

    // Filter by search
    const filteredVideos = useMemo(() => {
        return searchVideos(videos, query);
    }, [videos, query]);

    // Main ordination (acording to filter)
    const sortedVideos = useMemo(() => {
        const result = [...filteredVideos];

        // Sort by year
        if (filter.type === "year") {
            // Show most recent year first by default
            result.sort((a, b) =>
            filter.order === "asc" ? a.year - b.year : b.year - a.year);
        } else {
            // Array with the desired order acording to focus
            const focus = filter.prioFocus ?? 1;
            const baseOrder = getBasePrioORder(focus);

            // 'desc' use the baseOrder (default), 'asc' use the reversed order
            const activeOrder = filter.order === "desc" ? baseOrder : [...baseOrder].reverse();

            // Map to get the index of each prio
            const rankMap = new Map<number, number>();
            activeOrder.forEach((prio, idx) => rankMap.set(prio, idx));
            
            const getRank = (prio: number) => {
                // If the prio is not in the map, return the last index
                return rankMap.has(prio) ?  (rankMap.get(prio) as number) : activeOrder.length;
            };

            result.sort((a, b) => getRank(a.prio) - getRank(b.prio));
        }

        return result;
    }, [filteredVideos, filter]);
            
    // Group videos dynamically (by year or prio)
    const groupedVideos = useMemo(() => {
        if (filter.type === "year") {
            // Group by year
            return sortedVideos.reduce((acc: Record<number, Video[]>, video) => {
                if (!acc[video.year]) acc[video.year] = [];
                acc[video.year].push(video);
                return acc;
            }, {} as Record<number, Video[]>);
        } else {
            // Group by prio
            return sortedVideos.reduce((acc: Record<number, Video[]>, video) => {
                if (!acc[video.prio]) acc[video.prio] = [];
                acc[video.prio].push(video);
                return acc;
            }, {} as Record<number, Video[]>);
        }
    }, [sortedVideos, filter]);

    
    // Calculate the keys. Order groups dynamically acording to filter
    const sortedKeys = useMemo(() => {
        const keys = Object.keys(groupedVideos).map(Number);

        if (filter.type === "year") {
            // Sort by year (acording to order)
            return keys.sort((a, b) => filter.order === "asc" ? a - b : b - a);
        } else {
            // Sort by prio (use the same activeOrder that was used for sortedVideos)
            const focus = filter.prioFocus ?? 1;
            const baseOrder = getBasePrioORder(focus);
            const activeOrder = filter.order === "desc" ? baseOrder : [...baseOrder].reverse();

            // Return only the keys that are present in groupedVideos, in the order of activeOrder
            return activeOrder.filter((key) => keys.includes(key));
        }
    }, [groupedVideos, filter]);

    // Names map for h2 titles when filter is by prio
    const prioNames: Record<number, string> = {
        1: "Aftermovies",
        2: "Extras",
        3: "Presentaciones",
    };
    
    return (
        <div className='gallery'>
            {/* Filter menu */}
            <FilterMenu onFilterChange={setFilter} />


            {/* Video Gallery */}
            {sortedKeys.map((groupKey) => (
                <div className="videos-total" key={groupKey}>
                    <h2>
                        {filter.type === "year" ? groupKey : prioNames[groupKey] || `Prioridad ${groupKey}`}
                    </h2>

                    <div className="videos-group">
                        {groupedVideos[groupKey]
                            .sort((a, b) => a.prio - b.prio)
                            .map((video) => (
                                <VideoCard
                                    key={video.id}
                                    id={video.id}
                                    title={video.title}
                                    year={video.year}
                                    tags={video.tags}
                                    thumbnail={video.thumbnail}
                                    poster={video.poster}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoGallery;