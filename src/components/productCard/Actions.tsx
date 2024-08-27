import { Button } from 'react-bootstrap';
import { useState } from 'react';
import AddCartItem from '../AddCartItem';

function Actions({ displayProduct }: { displayProduct: DisplayProduct }) {
  const [showSizes, setShowSizes] = useState(false);
  const [size, setSize] = useState<number>(0);

  const sizePopover = (sizes: ShoeSize) => {
    return (
      <div className="grid gap-1 size-popover">
        {sizes.map((size) => (
          <div className="g-col-4" key={size.number}>
            <button
              type="button"
              className="size-button"
              onClick={() => changeSize(size.number)}
              disabled={!size.inStock}
            >
              {size.number}
            </button>
          </div>
        ))}
      </div>
    );
  };

  const changeSize = (size: number) => {
    setSize(size);
    toggleSizes();
  };

  const toggleSizes = () => {
    setShowSizes(!showSizes);
  };

  return (
    <>
      <div className="position-relative">
        {showSizes && sizePopover(displayProduct.size)}
      </div>
      <div className="d-flex justify-content-between gap-0">
        <Button variant={size ? 'secondary' : 'primary'} onClick={toggleSizes}>
          Größe {size !== 0 && size}
        </Button>
        <AddCartItem displayProduct={displayProduct} selectedSize={size} />
      </div>
    </>
  );
}

export default Actions;
