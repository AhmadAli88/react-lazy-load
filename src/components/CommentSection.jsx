
// CommentSection.jsx
/*eslint-disable*/
const CommentSection = ({ comments }) => {
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="comment">
            <h4>{comment.author}</h4>
            <p>{comment.text}</p>
          </div>
        ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentSection;





// import { useState, useEffect } from 'react';
// import LazyLoad from 'react-lazy-load';

// const CommentSection = () => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       const response = await fetch('/api/comments');
//       const data = await response.json();
//       setComments(data);
//     };
//     fetchComments();
//   }, []);

//   return (
//     <div className="comments">
//       {comments.map((comment, index) => (
//         <LazyLoad key={index} height={100} offset={100}>
//           <div className="comment">
//             <h5>{comment.user}</h5>
//             <p>{comment.text}</p>
//           </div>
//         </LazyLoad>
//       ))}
//     </div>
//   );
// };

// export default CommentSection;
