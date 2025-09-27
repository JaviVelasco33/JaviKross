import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/components/Videos/_VideoCard.scss";

interface VideoProps {
    id: number;
    title: string;
    year: number;
    tags: string[];
    thumbnail: string;
    poster: string;
}

export default function VideoCard({ id, title,  thumbnail, poster }: VideoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/video/${id}`);
    };
    
    return (
        <div className={`video-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        >
            {/* Poster image */}
            <img src={poster} alt={title} className="poster" />

            {/* Thumbnail image */}
            <img src={thumbnail} alt={title} className="thumbnail" />
            <div className="video-info">
                <h4>{title}</h4>
            </div>
        </div>
    );
}