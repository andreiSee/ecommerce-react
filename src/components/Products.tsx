import Col from 'react-bootstrap/Col';
import products from '../../data/products-sneaker.json';
import ProductCard from './productCard/Card';

function Products() {
  return (
    <>
      <h2>Sneaker</h2>
      <div className="grid">
        {products &&
          products.map((product) => (
            <Col className="g-col-12 g-col-md-6 g-col-xl-4" key={product.id}>
              <ProductCard displayProduct={product} />
            </Col>
          ))}
      </div>
    </>
  );
}

export default Products;
