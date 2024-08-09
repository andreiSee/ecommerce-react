import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import products from '../../data/products-sneaker.json';
import AddCartItem from './AddCartItem';

function Products() {
  return (
    <>
      <h2>Sneaker</h2>
      <div className="grid">
        {products &&
          products.map((product) => (
            <Col className="g-col-12 g-col-md-6 g-col-xl-4" key={product.id}>
              <Card as="article" className="h-100">
                <picture>
                  <source srcSet={`/${product.imgMobile} 400w`} />
                  <Card.Img
                    variant="top"
                    src={`/${product.img} 1890w`}
                    alt={product.name}
                  />
                </picture>
                <Card.Body>
                  <Card.Title as="h3">{product.name}</Card.Title>
                  <div>
                    {product.price} {product.currency}
                  </div>
                  <Card.Text>{product.teaser}</Card.Text>
                  <AddCartItem product={product} />
                </Card.Body>
              </Card>
            </Col>
          ))}
      </div>
    </>
  );
}

export default Products;
