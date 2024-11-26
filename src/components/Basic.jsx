
import LazyLoad from 'react-lazy-load';

const Basic = () => {
  return (
    <div>
      <h1>Lazy Load Example</h1>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400" alt="Example Image" />
      </LazyLoad>
      <p>Scroll down to load the image</p>
    </div>
  );
};

export default Basic;
