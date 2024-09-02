import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ColorModeProvider from './ColorModeProvider';

type Props = { children: React.ReactNode };

const App = ({ children }: Props) => {
  return (
    <ColorModeProvider>
      <Container>
        <Row className="flex-column min-vh-100 gap-4">
          <div className="legal">
            Produkte und Preise sind frei erfunden und können nicht bestellt
            werden.
          </div>
          <Col as="header" className="flex-grow-0 pb-5">
            <Header />
          </Col>
          <Col as="main" className="text-center p-4 rounded-4">
            {children}
          </Col>
          <Col
            as="footer"
            className="flex-grow-0 d-flex flex-column flex-wrap gap-3 align-content-center m-5"
          >
            <Footer />
          </Col>
        </Row>
      </Container>
    </ColorModeProvider>
  );
};

export default App;
