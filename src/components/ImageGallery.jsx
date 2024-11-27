/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const ImageGallery = ({ images }) => {
  return (
    <div className="">
      {images.map((img, index) => (
        <LazyLoad key={index}>
          <img src={img.url} alt={img.title} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default ImageGallery;
