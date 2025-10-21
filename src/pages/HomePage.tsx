import { Header } from "@/components/Header/Header";
import { VideoGallery } from "@/components/Videos/VideoGallery";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import { useEffect, useRef, useState } from "react";
import HeroHome from "@/components/Home/HeroHome";
import { useLocation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

import "@/styles/Pages/_HomePage.scss";


export default function HomePage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [query, setQuery] = useState("");
    const [hasLoaded, setHasLoaded] = useState(() => {
        const saved = sessionStorage.getItem("hasLoaded");
        return saved ? JSON.parse(saved) : false;
    });
    const [prog, setProg] = useState(0);
    
    const mainContentRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    const randomInt = Math.floor(Math.random() * (500 - 100)) + 100;
    
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

    useEffect(() => {
        sessionStorage.setItem("hasLoaded", JSON.stringify(hasLoaded));
    }, [hasLoaded]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProg(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setHasLoaded(true);
                    return prev;
                }
                return prev + 5;
            });
        }, randomInt);

        return () => clearInterval(interval);
    }, [randomInt, hasLoaded]);

    if (!hasLoaded) {
        return <LoadingPage progress={prog} />;
    }

    return (
        <div className="home-page">
            <Header query={query} setQuery={setQuery} />
            <HeroHome />
            <div ref={mainContentRef} className="main-content">
                <VideoGallery videos={videos} query={query} />
            </div>
        </div>
    );
}