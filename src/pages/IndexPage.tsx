import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import App from '../App';
import Cart from '../components/Cart';
import Products from '../components/Products';

function IndexPage() {
  return (
    <App>
      <Row className="flex-sm-row-reverse">
        <Col sm={4} md={3}>
          <Cart />
        </Col>
        <Col sm={8} md={9} className="mt-3 mt-sm-0">
          <Products />
        </Col>
      </Row>
    </App>
  );
}

export default IndexPage;
