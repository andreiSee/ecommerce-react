import { Card } from 'react-bootstrap';
import Actions from './Actions';

function ProductCard({ displayProduct }: { displayProduct: DisplayProduct }) {
  return (
    <Card as="article" className="h-100 position-relative">
      <div className="price-label">
        {displayProduct.price} {displayProduct.currency}
      </div>
      <Card.Img
        variant="top"
        src={`/${displayProduct.imgTeaser}`}
        alt={displayProduct.name}
      />
      <Card.Body>
        <Card.Title as="h3">{displayProduct.name}</Card.Title>
        <div className="d-flex flex-column">
          <Card.Text>{displayProduct.teaser}</Card.Text>
          <Actions displayProduct={displayProduct} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
