import React, { useEffect, useState } from "react";
import "@/styles/components/Videos/_VideoLikes.scss";

interface VideoLikesProps {
    videoId: number
}

const VideoLikes: React.FC<VideoLikesProps> = ({ videoId }) => {
    const [likes, setLikes] = useState(0);
    const [vote, setVote] = useState<"like" | "dislike" | null>(null);

    useEffect(() => {
        const storedLikes = localStorage.getItem(`video-${videoId}-likes`);
        const storedVote = localStorage.getItem(`video-${videoId}-vote`);

        if (storedLikes) {
            setLikes(Number(storedLikes));
        }

        if (storedVote === "like" || storedVote === "dislike") {
            setVote(storedVote);
        }
    }, [videoId]);

    useEffect(() => {
        localStorage.setItem(`video-${videoId}-likes`, String(likes));
        localStorage.setItem(`video-${videoId}-vote`, vote ?? "");
    }, [likes, vote, videoId]);

    const handleVote = (type: "like" | "dislike") => {
        if (vote === type) {
            setLikes(likes - 1);
            setVote(null);
        } else {
            if (vote === null) {
                setLikes(likes + 1);
            }
            setVote(type);
        }
    };

    return (
        <div className="video-likes">
            <button onClick={() => handleVote("like")} className={vote === "like" ? "active" : ""}>
                👍
            </button>
            <button onClick={() => handleVote("dislike")} className={vote === "dislike" ? "active" : ""}>
                👎
            </button>
            <h1>{likes} likes</h1>
        </div>
    );
};

export default VideoLikes;
