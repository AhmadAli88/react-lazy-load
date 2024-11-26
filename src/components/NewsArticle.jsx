/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const NewsArticle = ({ article }) => {
  return (
    <div className="article">
      <h1>{article.title}</h1>
      <LazyLoad height={300} offset={200}>
        <img src={article.image} alt={article.title} />
      </LazyLoad>
      <p>{article.content}</p>
      <LazyLoad height={200} offset={200}>
        <iframe
          src={article.videoUrl}
          title="Article Video"
          width="100%"
          height="300"
        ></iframe>
      </LazyLoad>
    </div>
  );
};

export default NewsArticle;
