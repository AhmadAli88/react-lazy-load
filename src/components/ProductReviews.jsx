/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const ProductReviews = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <LazyLoad key={index} height={100} offset={150}>
          <div className="review">
            <h4>{review.user}</h4>
            <p>{review.text}</p>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default ProductReviews;
