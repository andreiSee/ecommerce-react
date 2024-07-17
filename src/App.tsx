import Col from 'react-bootstrap/Col';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Index from './pages/Index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container>
      <Row className="flex-column min-vh-100 gap-3">
        <Col as="header" className="flex-grow-0 p-3">
          <Header />
        </Col>
        <Col as="main" className="text-center bg-light p-3">
          <Index />
        </Col>
        <Col as="footer" className="text-center flex-grow-0 p-3">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
