import { useNavigate } from "react-router-dom";
import "@/styles/components/Videos/_SuggestedThumbs.scss";

interface VideoProps {
    id: number;
    title: string;
    thumbnail: string;
}

export default function VideoCard({ id, title,  thumbnail }: VideoProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/video/${id}`);
    };
    
    return (
        <div className={"thumb"}
        onClick={handleClick}
        >
            {/* Thumbnail image */}
            <img src={thumbnail} alt={title} className="thumbnail" />
        </div>
    );
}