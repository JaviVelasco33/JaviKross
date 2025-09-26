import React from "react";
import "@/styles/components/Videos/_VideoPlayer.scss";

interface VideoPlayerProps {
    title: string
    videoFile: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, videoFile }) => {
    console.log(videoFile);
    return (
        <div className="video-player">
            <video
                src={videoFile}
                controls
                width={"640"}
            />
            
            <h1>{title}</h1>
        </div>
    );
};

export default VideoPlayer;
