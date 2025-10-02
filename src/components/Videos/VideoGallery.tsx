import VideoCard from "./VideoCard";
import { searchVideos } from "../../utils/search";
import type { Video } from "../../utils/search";
import "@/styles/components/Videos/_VideoGallery.scss";

interface VideoGalleryProps {
    videos: Video[]
    query: string
}

export function VideoGallery({ videos, query }: VideoGalleryProps) {
    const filteredVideos = searchVideos(videos, query);

    // Agrupar por año
    const videosByYear = filteredVideos.reduce((acc: Record<number, Video[]>, video) => {
        if (!acc[video.year]) acc[video.year] = [];
        acc[video.year].push(video);
        return acc;
    }, {} as Record<number, Video[]>);

    // Ordenar años de mayor a menor
    const sortedYears = Object.keys(videosByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <div className='gallery'>
            {sortedYears.map((year) => (
                <div className="videos-total" key={year}>
                    <h2>{year}</h2>
                    <div className="videos-group">
                        {videosByYear[year]
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
}
