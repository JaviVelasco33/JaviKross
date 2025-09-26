import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/styles/components/Videos/_VideoCard.scss';

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
        navigate(`/videos/${id}`);
    };
    
    return (
        <div className={`video-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        >
            <img 
            src={isHovered ? poster : thumbnail} 
            alt={title} 
            className="thumbnail" />
            <div className="video-info">
                <h4>{title}</h4>
            </div>
        </div>
    );
}