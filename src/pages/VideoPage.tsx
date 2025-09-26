import { useParams } from 'react-router-dom';

function VideoPage() {
    const { id } = useParams();

    return (
        <div style={{ color: 'white', padding: '20px' }}>
            <h1>Video {id}</h1>
            {/* Aquí luego irá el reproductor */}
        </div>
    );
}

export default VideoPage;
