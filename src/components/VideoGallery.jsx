/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const VideoGallery = ({ videos }) => {
  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <LazyLoad key={index} height={300} offset={200}>
          <div className="video-item">
            <img src={video.thumbnail} alt={video.title} />
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default VideoGallery;
