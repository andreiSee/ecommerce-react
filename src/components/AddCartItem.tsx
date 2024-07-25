import { useAppDispatch } from '../hooks';
import { addCartItem } from '../slices/cartSlice';
import Button from 'react-bootstrap/Button';

const AddCartItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const addToCart = (product: Product) => {
    dispatch(addCartItem(product));
  };

  return (
    <>
      <Button variant="primary" onClick={() => addToCart(product)}>
        In den Warenkorb
      </Button>
    </>
  );
};

export default AddCartItem;
