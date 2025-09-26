import { useParams } from "react-router-dom";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import VideoPlayer from "@/components/Videos/VideoPlayer";
import VideoLikes from "@/components/Videos/VideoLikes";

function VideoPage() {
    const { id } = useParams<{ id: string }>();
    const video = videosData.find((v: Video) => v.id === Number(id));

    if (!video) {
        return <div>Video not found</div>;
    }
    
    console.log(video.videoFile);
    return (
        <div style={{ color: "white", padding: "20px" }}>
            <VideoPlayer title={video.title} videoFile={video.videoFile} />
            <VideoLikes videoId={video.id} />
        </div>
    );

}

export default VideoPage;
