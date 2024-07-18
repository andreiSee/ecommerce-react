import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem } from '../slices/cartSlice';
import { Button, ListGroup } from 'react-bootstrap';
import { RootState } from '../store';

const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <ListGroup as="ul">
      {cartItems.map((cartItem: CartItem) => (
        <ListGroup.Item
          as="li"
          // Todo
          key={cartItem.id}
          className="d-flex justify-content-between"
        >
          <span>
            {cartItem.details.id} {cartItem.details.name}{' '}
            {cartItem.details.price} {cartItem.details.currency}
          </span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => dispatch(removeCartItem(cartItem.id))}
          >
            X
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CartItems;
