import SuggestedThumbs from "./SuggestedThumbs";
import videosData from "@/data/videos.json";

import "@/styles/components/Videos/_VideosSuggested.scss";


export default function VideosSuggested () {
    const getRandomVideos = (count: number) => {
        const videos = [...videosData]; // Create a copy of the array
        const randomVideos = [];
        
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * videos.length);
            randomVideos.push(videos[randomIndex]);
            videos.splice(randomIndex, 1); // Remove the selected video
        }
        
        return randomVideos;
    };
    const suggestedVideos = getRandomVideos(3);

    return (
        <div className="thumb-cont">
            {suggestedVideos.map((video) => (
                <SuggestedThumbs
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    thumbnail={video.thumbnail}
                />
            ))}
        </div>
    );
};
