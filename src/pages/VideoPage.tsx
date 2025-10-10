import { useParams } from "react-router-dom";
import videosData from "@/data/videos.json";
import type { Video } from "@/utils/search";
import VideoPlayer from "@/components/Videos/VideoPlayer";
import VideoLikes from "@/components/Videos/VideoLikes";
import "@/styles/Pages/_VideoPage.scss";

function VideoPage() {
    const { id } = useParams<{ id: string }>();
    const video = videosData.find((v: Video) => v.id === Number(id));

    if (!video) {
        return <div>Video not found</div>;
    }
    
    console.log(video.videoFile); 
    return (
        <div className="video-page">
            <div className="videoPage-container">
                <VideoPlayer title={video.title} videoFile={video.videoFile} />
                <VideoLikes videoId={video.id} />

                {/* // TODO: Add component recomendations */}
                
            </div>
        </div>
    );

}

export default VideoPage;
