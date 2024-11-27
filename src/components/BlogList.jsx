/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <LazyLoad key={index}  offset={200}>
          <div className="post">
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} style={{width: '200px', height: '200px'}}/>
            <p>{post.excerpt}</p>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default BlogList;
