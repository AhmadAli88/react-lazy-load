// Feed.jsx
/*eslint-disable*/

const Feed = ({ items }) => {
  return (
    <div className="feed">
      <h2>News Feed</h2>
      {items.length > 0 ? (
        items.map((items, index) => (
          <div key={index} className="post">
            <h3>{items.title}</h3>
            <p>{items.description}</p> 
            {items.image && <img src={items.image} alt={items.title} style={{height: '200px', width: '200px'}} />}
          </div>
        ))
      ) : (
        <p>No posts available at the moment.</p>
      )}
    </div>
  );
};

export default Feed;
