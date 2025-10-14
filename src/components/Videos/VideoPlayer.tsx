import React from "react";
import "@/styles/components/Videos/_VideoPlayer.scss";

interface VideoPlayerProps {
    title: string
    videoFile: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, videoFile }) => {
    console.log(videoFile);
    return (
        <div className="videoPlayer-container">
            <video
                className="video-player"
                src={videoFile}
                controls
                autoPlay
                
            />
            
            <h1>{title}</h1>
        </div>
    );
};

export default VideoPlayer;
