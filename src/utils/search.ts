import removeAccents from 'remove-accents';

export interface Video {
    id: number;
    title: string;
    year: number;
    prio: number;
    tags: string[];
    thumbnail: string;
    poster: string;
}

export function searchVideos(videos: Video[], query: string): Video[] {
    if (!query.trim()) return videos;

    const normalizedQuery = removeAccents(query.toLowerCase());

    return videos.filter((video) => {
        const title = removeAccents(video.title.toLowerCase());
        const tags = video.tags.map((t) => removeAccents(t.toLowerCase()));
        const year = video.year.toString();

        return (
            title.includes(normalizedQuery) ||
            tags.some((tag) => tag.includes(normalizedQuery)) ||
            year.includes(normalizedQuery)
        );
    });
}

