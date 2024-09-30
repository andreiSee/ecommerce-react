import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddCartItem from './AddCartItem';
import Sizes from './Sizes';

type Props = { displayProduct: DisplayProduct };

const Actions = ({ displayProduct }: Props) => {
  const [showSizes, setShowSizes] = useState(false);
  const [size, setSize] = useState<number>(0);

  return (
    <>
      <div className="position-relative">
        {showSizes && (
          <Sizes
            sizes={displayProduct.sizes}
            setSize={setSize}
            showSizes={showSizes}
            setShowSizes={setShowSizes}
          />
        )}
      </div>
      <div className="d-flex flex-wrap justify-content-between gap-2">
        <Button
          variant={size ? 'secondary' : 'primary'}
          onClick={() => setShowSizes(!showSizes)}
          className="product-card product-card__btn"
        >
          Größe {size !== 0 && size}
        </Button>
        <AddCartItem displayProduct={displayProduct} selectedSize={size} />
      </div>
    </>
  );
};

export default Actions;
