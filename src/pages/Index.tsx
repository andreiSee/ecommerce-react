import Card from 'react-bootstrap/Card';
import products from '../../data/products.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddCartItem from '../components/AddCartItem';
import Cart from '../components/Cart';

function Index() {
  return (
    <Row className="flex-sm-row-reverse">
      <Col sm={4} md={3}>
        <Cart />
      </Col>
      <Col sm={8} md={9} className="mt-3 mt-sm-0">
        <h2>Products</h2>
        <Row sm={1} md={2} lg={3}>
          {products &&
            products.map((product) => (
              <Col className="g-4 mw-200" key={product.id}>
                <Card className="h-100">
                  <Card.Img variant="top" src={`../../img/${product.img}`} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div>
                      {product.price} {product.currency}
                    </div>
                    <Card.Text>{product.description}</Card.Text>
                    <AddCartItem product={product} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Index;
