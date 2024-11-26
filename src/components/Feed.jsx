/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const Feed = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h4>{post.user}</h4>
          <p>{post.text}</p>
          <LazyLoad height={300} offset={100}>
            <img src={post.imageUrl} alt="Post" />
          </LazyLoad>
        </div>
      ))}
    </div>
  );
};

export default Feed;
