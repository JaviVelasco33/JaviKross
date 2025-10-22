import React, { useEffect, useState } from "react";
import "@/styles/components/Videos/_VideoLikes.scss";
import CustomButton from "../CustomButton/CustomButton";

interface VideoLikesProps {
    videoId: number
}

const VideoLikes: React.FC<VideoLikesProps> = ({ videoId }) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    useEffect(() => {
        const storedLikes = localStorage.getItem(`video-${videoId}-likes`);
        const storedVote = localStorage.getItem(`video-${videoId}-vote`);

        if (storedLikes) {
            setLikes(Number(storedLikes));
        }

        if (storedVote) {
            setIsLiked(storedVote === "true");
        }
    }, [videoId]);

    useEffect(() => {
        localStorage.setItem(`video-${videoId}-likes`, String(likes));
        localStorage.setItem(`video-${videoId}-vote`, String(isLiked));
    }, [likes, isLiked, videoId]);

    const handleVote = () => {
        console.log(isLiked);
        setIsLiked(!isLiked);
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
    };

    const handleDislike = () => {
        setIsDisliked(!isDisliked);
        handleVote();
        setTimeout(() => {
            setIsDisliked(false);
        }, 500);
    };

    return (
        <div className="video-likes">
            <CustomButton className={`btn like-btn ${isLiked ? "active" : ""}`} 
            onClick={handleVote}
            label={isLiked ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
            )}
            />
            <CustomButton className={`btn dislike-btn ${isDisliked ? "active" : ""}`} 
            onClick={handleDislike}
            label={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart-broken"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-2 4l4 3l-2 4v3" /></svg>}
            />
            <h1>{likes} {likes != 1 ? "likes" : "like"}</h1>
        </div>
    );
};

export default VideoLikes;
