import './App.css';
// import Basic from './components/Basic';
import ImageGallery from './components/ImageGallery';

function App() {
  const images = [
    { url: 'https://via.placeholder.com/600x400', title: 'Image 1' },
    { url: 'https://via.placeholder.com/600x400', title: 'Image 2' },
    { url: 'https://via.placeholder.com/600x400', title: 'Image 3' },
    // Add more images as needed
  ];
  return (
    <div>
      {/* <div>
        <Basic />
      </div> */}

      <div>
        <h1>My Image Gallery</h1>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}

export default App;
