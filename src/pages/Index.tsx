import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import products from '../../data/products.json';
import CardGroup from 'react-bootstrap/CardGroup';

function Index() {
  return (
    <div>
      <h1>Products</h1>
      <CardGroup className="gap-4">
        {products &&
          products.map((product) => (
            <Card className="w-25" key={product.id}>
              <Card.Img variant="top" src={`../../img/${product.img}`} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <div>
                  {product.price} {product.currency}
                </div>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Add to Card</Button>
              </Card.Body>
            </Card>
          ))}
      </CardGroup>
    </div>
  );
}

export default Index;
