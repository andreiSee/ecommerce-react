import Card from 'react-bootstrap/Card';
import products from '../../data/products.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddCartItem from '../components/AddCartItem';
import Cart from '../components/Cart';

function Index() {
  return (
    <Row sm={2}>
      <Col className="w-75">
        <h1>Products</h1>
        <Row md={2} lg={3}>
          {products &&
            products.map((product) => (
              <Col className="g-4" key={product.id}>
                <Card style={{ minWidth: '200px' }}>
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
      <Col className="w-25">
        <Cart />
      </Col>
    </Row>
  );
}

export default Index;
