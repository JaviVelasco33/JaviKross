import { Header } from "@/components/Header/Header";
import { VideoGallery } from "@/components/Videos/VideoGallery";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import { useEffect, useRef, useState } from "react";
import HeroHome from "@/components/Home/HeroHome";

import "@/styles/Pages/_HomePage.scss";


export default function HomePage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [query, setQuery] = useState("");

    const mainContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        document.title = "JaviKross | Home";
    }, []);

    useEffect(() => {
        setVideos(videosData);
    }, []);

    useEffect(() => {
        if (query.trim() !== "" && mainContentRef.current) {
            mainContentRef.current.scrollIntoView({ 
                behavior: "smooth" ,
                block: "start",
            });
        }
    }, [query]);

    return (
        <div className="home-page">
            <Header onSearch={setQuery} />
            <HeroHome />
            <div ref={mainContentRef} className="main-content">
                <VideoGallery videos={videos} query={query} />
            </div>
        </div>
    );
}