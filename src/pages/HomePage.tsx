import { Header } from "@/components/Header/Header";
import { VideoGallery } from "@/components/Videos/VideoGallery";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import { useEffect, useState } from "react";


function HomePage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [query, setQuery] = useState("");


    useEffect(() => {
        setVideos(videosData);
    }, []);

    return (
        <div id='home-page' style={{ backgroundColor: "#0f0f0f", color: "white", padding: "20px" }}>
            <Header onSearch={setQuery} />
            <VideoGallery videos={videos} query={query} />

        </div>
    );
}

export default HomePage;
