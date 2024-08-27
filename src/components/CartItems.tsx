import { useAppSelector, useAppDispatch } from '../hooks/useStore';
import { removeCartItem } from '../slices/cartSlice';
import { Button, ListGroup } from 'react-bootstrap';
import { RootState } from '../store';

const CartItems = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  return (
    <ListGroup as="ul" className="gap-1">
      {cartItems.map((cartItem: CartItem) => (
        <ListGroup.Item
          as="li"
          key={cartItem.details.id}
          className="d-flex justify-content-between"
        >
          <div className="d-flex flex-column">
            <div className=" text-start">{cartItem.details.name}</div>
            <div className=" text-start">Größe {cartItem.details.size}</div>
            <div className=" text-start">
              {cartItem.details.price} {cartItem.details.currency}
            </div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="align-self-start"
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
