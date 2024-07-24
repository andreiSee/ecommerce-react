import Col from 'react-bootstrap/Col';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Row className="flex-column min-vh-100 gap-4">
        <Col as="header" className="flex-grow-0 pt-1">
          <Header />
        </Col>
        <Col as="main" className="text-center bg-light p-3 rounded-4">
          {children}
        </Col>
        <Col
          as="footer"
          className="flex-grow-0 d-flex flex-column flex-wrap gap-3 align-content-center p-3"
        >
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
