import { Header } from "@/components/Header/Header";
import { VideoGallery } from "@/components/Videos/VideoGallery";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import { useEffect, useRef, useState } from "react";
import HeroHome from "@/components/Home/HeroHome";
import { useLocation } from "react-router-dom";

import "@/styles/Pages/_HomePage.scss";


export default function HomePage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [query, setQuery] = useState("");
    const mainContentRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    useEffect(() => {
        document.title = "JaviKross | Home";
    }, []);

    useEffect(() => {
        setVideos(videosData);
    }, []);

    // Read global search from SearchBar
    useEffect(() => {
        const searchQuery = location.state?.query || "";

        if (typeof searchQuery !== "undefined") {
            setQuery(searchQuery);
        }

            // Scroll to main content only if query exists
            if (searchQuery) {
                setTimeout(() => {
                    if (mainContentRef.current) {
                        mainContentRef.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }, 150);
            }
        }, [location.state]);

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