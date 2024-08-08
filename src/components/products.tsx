import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import products from '../../data/products-sneaker.json';
import AddCartItem from '../components/AddCartItem';

function Products() {
  return (
    <>
      <h2>Produkte</h2>
      <Row sm={1} md={2} lg={3}>
        {products &&
          products.map((product) => (
            <Col className="g-4 mw-200" key={product.id}>
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
      </Row>
    </>
  );
}

export default Products;
