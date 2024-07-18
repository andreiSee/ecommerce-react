import { useDispatch } from 'react-redux';
import { addCartItem } from '../slices/cartSlice';
import Button from 'react-bootstrap/Button';

const AddCartItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

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
