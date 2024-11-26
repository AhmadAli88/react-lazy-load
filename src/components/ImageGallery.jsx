/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <LazyLoad key={index} height={200} offset={100}>
          <img src={img.url} alt={img.title} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default ImageGallery;
