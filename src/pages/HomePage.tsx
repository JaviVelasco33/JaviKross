import { Header } from "@/components/Header/Header";
import { VideoGallery } from "@/components/Videos/VideoGallery";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import { useEffect, useState } from "react";
import HeroHome from "@/components/Home/HeroHome";

import "@/styles/Pages/_HomePage.scss";


export default function HomePage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setVideos(videosData);
    }, []);

    return (
        <div className="home-page">
            <Header onSearch={setQuery} />
            <HeroHome />
            <div className="main-content">
                <VideoGallery videos={videos} query={query} />
            </div>
        </div>
    );
}