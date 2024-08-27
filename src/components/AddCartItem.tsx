import { useAppDispatch } from '../hooks/useStore';
import { addCartItem } from '../slices/cartSlice';
import Button from 'react-bootstrap/Button';

const AddCartItem = ({
  displayProduct,
  selectedSize,
}: {
  displayProduct: DisplayProduct;
  selectedSize: number;
}) => {
  const dispatch = useAppDispatch();
  const selectedProduct = { ...displayProduct, size: selectedSize };

  const addToCart = (selectedProduct: SelectedProduct) => {
    dispatch(addCartItem(selectedProduct));
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => addToCart(selectedProduct)}
        disabled={selectedProduct.size === 0 ? true : false}
      >
        In den Warenkorb
      </Button>
    </>
  );
};

export default AddCartItem;
