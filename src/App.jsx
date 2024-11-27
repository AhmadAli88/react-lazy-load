import './App.css';
import BlogList from './components/BlogList';
import CommentSection from './components/CommentSection';
import Feed from './components/Feed';
import VideoGallery from './components/VideoGallery';
import Basic from './components/Basic';
import ImageGallery from './components/ImageGallery';

function App() {
  const images = [
    { url: 'https://via.placeholder.com/600x400', title: 'Image 1' },
    { url: 'https://via.placeholder.com/600x400', title: 'Image 2' },
    { url: 'https://via.placeholder.com/600x400', title: 'Image 3' },
    // Add more images as needed
  ];

  const posts = [
    {
      title: 'React Lazy Load in Blog Posts',
      image:
        'https://plus.unsplash.com/premium_photo-1710119487240-fa1164fdab8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      excerpt: 'Learn how to use lazy loading in React for blog images...',
    },
    {
      title: 'Optimizing Performance in React',
      image:
        'https://plus.unsplash.com/premium_photo-1710119487240-fa1164fdab8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      excerpt: 'Explore tips and tricks to boost React app performance...',
    },
    {
      title: 'Building Reusable Components',
      image:
        'https://plus.unsplash.com/premium_photo-1710119487240-fa1164fdab8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    {
      title: 'React Lazy Loading Made Simple',
      description:
        'Learn how to implement lazy loading in React to optimize performance.',
      image:
        'https://images.unsplash.com/photo-1731947463347-a6b36e97fe9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    },
    {
      title: 'Exploring React Hooks',
      description: 'Understand the power of hooks like useState and useEffect.',
      image:
        'https://images.unsplash.com/photo-1731947463347-a6b36e97fe9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    },
    {
      title: 'Styling in React',
      description: 'Discover various ways to style React components.',
      image:
        'https://images.unsplash.com/photo-1731947463347-a6b36e97fe9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    },
  ];
  const videos = [
    {
      thumbnail:
        'https://images.unsplash.com/photo-1732587032289-8fbf556482c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'React Lazy Loading Explained',
      description: 'Learn how to use lazy loading effectively in React.',
    },
    {
      thumbnail:
        'https://images.unsplash.com/photo-1732587032289-8fbf556482c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'Advanced React Techniques',
      description: 'Discover advanced techniques to improve your React apps.',
    },
    {
      thumbnail:
        'https://images.unsplash.com/photo-1732587032289-8fbf556482c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'Optimizing React Performance',
      description: 'Tips and tricks to enhance React app performance.',
    },
    {
      thumbnail:
        'https://images.unsplash.com/photo-1732587032289-8fbf556482c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'React Hooks in Depth',
      description: 'Understand React hooks for better state management.',
    },
  ];
  return (
    <div>
      <Basic />

      <h1>My Image Gallery</h1>
      <ImageGallery images={images} />

      <h1>My Blog</h1>
      <BlogList posts={posts} />

      <h1>Welcome to the Blog</h1>
      <CommentSection comments={comments} />

      <h1>Feed</h1>
      <Feed items={feedItems} />

      <h1>Video Gallery</h1>
      <VideoGallery videos={videos} />
    </div>
  );
}

export default App;
