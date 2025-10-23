import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import VideoPlayer from "@/components/Videos/VideoPlayer";
import VideoLikes from "@/components/Videos/VideoLikes";
import Header from "@/components/Header/Header";
import VideosSuggested from "../components/Videos/VideosSuggested";

import "@/styles/Pages/_VideoPage.scss";

const VideoPage = () => {
    const { id } = useParams<{ id: string }>();
    const video = videosData.find((v: Video) => v.id === Number(id));
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (video) {
            document.title = `${video.title}`;
        } else {
            document.title = "JaviKross | Video";
        }
    }, [video]);

    if (!video) return <div>Video not found</div>;
    
    return (
        <div className="video-page">
            <Header query={query} setQuery={setQuery} />
            
            <div className="videoPage-container">
                <VideoPlayer title={video.title} videoFile={video.videoFile} />
                <VideoLikes videoId={video.id} />
            </div>
                {/* // TODO: Add component recomendations */}
            <div className="suggested-videos">
                <h2>Otros vídeos</h2>
                <VideosSuggested />
            </div>
        </div>
    );
};

export default VideoPage;
