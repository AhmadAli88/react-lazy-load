import './App.css';
import BlogList from './components/BlogList';
import CommentSection from './components/CommentSection';
import Feed from './components/Feed';
// import Basic from './components/Basic';
// import ImageGallery from './components/ImageGallery';

function App() {
  // const images = [
  //   { url: 'https://via.placeholder.com/600x400', title: 'Image 1' },
  //   { url: 'https://via.placeholder.com/600x400', title: 'Image 2' },
  //   { url: 'https://via.placeholder.com/600x400', title: 'Image 3' },
  //   // Add more images as needed
  // ];

  const posts = [
    {
      title: 'React Lazy Load in Blog Posts',
      image: 'https://example.com/blog1.jpg',
      excerpt: 'Learn how to use lazy loading in React for blog images...',
    },
    {
      title: 'Optimizing Performance in React',
      image: 'https://example.com/blog2.jpg',
      excerpt: 'Explore tips and tricks to boost React app performance...',
    },
    {
      title: 'Building Reusable Components',
      image: 'https://example.com/blog3.jpg',
      excerpt: 'A guide to creating reusable React components effectively...',
    },
    // Add more blog posts as needed
  ];

  const comments = [
    { author: 'Alice', text: 'This is an amazing post!' },
    { author: 'Bob', text: 'I found this very helpful, thanks!' },
    { author: 'Charlie', text: 'Great insights, looking forward to more!' },
    // Add more comments as needed
  ];
  const feedItems = [
    { id: 1, title: 'React Lazy Loading', content: 'Learn how to optimize performance with lazy loading.' },
    { id: 2, title: 'React Hooks', content: 'Understand the power of hooks in functional components.' },
    { id: 3, title: 'React Router', content: 'Implement dynamic routing in your React app.' },
  ];
  return (
    <div>
      {/* <div>
        <Basic />
      </div> */}

      {/* <div>
        <h1>My Image Gallery</h1>
        <ImageGallery images={images} />
      </div> */}
      <div>
        <h1>My Blog</h1>
        <BlogList posts={posts} />
      </div>
      <div>
        <h1>Welcome to the Blog</h1>
        <CommentSection comments={comments} />
      </div>

      <div className="App">
      <h1>Feed</h1>
      <Feed items={feedItems} />
    </div>
    </div>
  );
}

export default App;
