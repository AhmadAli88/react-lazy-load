/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <LazyLoad key={index} height={300} offset={150}>
          <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default ProductList;
