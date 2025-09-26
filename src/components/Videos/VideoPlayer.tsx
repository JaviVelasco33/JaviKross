import React from "react";

interface VideoPlayerProps {
    title: string
    videoFile: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, videoFile }) => {
    return (
        <div className="video-player">
            <video
                src={videoFile}
                controls
                style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <h1>{title}</h1>
        </div>
    );
};

export default VideoPlayer;
