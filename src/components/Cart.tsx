import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CartItems from './CartItems';
import { Container } from 'react-bootstrap';

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [cartSum, setCartSum] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item: CartItem) => {
      sum += item.details.price;
    });
    setCartSum(sum);
  }, [cartItems]);

  return (
    <>
      <h1>Warenkorb</h1>
      <div className="pt-4">
        <CartItems />
        {cartSum !== 0 && (
          <Container className="text-start p-3 bg-body-secondary rounded-2 mt-2">
            Summe: <span className="fw-bold">{cartSum}</span>
          </Container>
        )}
        {cartSum === 0 && <div>Der Warenkorb ist leer.</div>}
      </div>
    </>
  );
}

export default Cart;
