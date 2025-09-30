import { Header } from "@/components/Header/Header";
import { VideoGallery } from "@/components/Videos/VideoGallery";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import { useEffect, useState } from "react";
import "@/styles/Pages/_HomePage.scss";


function HomePage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [query, setQuery] = useState("");


    useEffect(() => {
        setVideos(videosData);
    }, []);

    return (
        <div className="home-page">
            <Header onSearch={setQuery} />
            <VideoGallery videos={videos} query={query} />

        </div>
    );
}

export default HomePage;
