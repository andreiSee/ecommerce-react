import { it, expect, describe } from 'vitest';
import { renderWithProviders } from '../src/utilities/testUtils';
import IndexPage from '../src/pages/IndexPage';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Cart', () => {
  it('should be empty in the first place.', () => {
    renderWithProviders(<IndexPage />);

    expect(screen.getByText(/warenkorb ist leer/i)).toBeInTheDocument();
  });

  it('should show the one item after clicking add to cart button.', async () => {
    renderWithProviders(<IndexPage />);

    const user = userEvent.setup();

    const card = screen.getByRole('heading', {
      level: 3,
      name: /ocean classic/i,
    }).parentNode;

    const actionBtns = card?.querySelectorAll('button');

    if (actionBtns) {
      const selectSizeBtn = actionBtns[0];
      const addToCartBtn = actionBtns[1];
      await user.click(selectSizeBtn);

      const sizeBtns = card?.querySelectorAll('.size-button');
      // screen.debug();
      // screen.debug(test[0]);
      if (sizeBtns && sizeBtns?.length > 0) await user.click(sizeBtns[0]);
      await user.click(addToCartBtn);
    }

    const cart = screen.getByTestId('cart');
    const cartItems = cart.querySelectorAll('li');

    expect(cartItems.length).toEqual(1);
    expect(cartItems[0]).toHaveTextContent(/ocean classic/i);
  });

  it('should remove the one item deleted of the cart', async () => {
    const preloadedState = {
      cart: {
        cartItems: [
          {
            id: 1,
            details: {
              id: 1,
              name: 'Ocean Classic',
              teaser: 'Den Ozean immer zu Füßen!',
              price: 126,
              currency: '€',
              img: 'sneaker-1.webp',
              imgTeaser: 'sneaker-1-400x300.webp',
              size: 42,
            },
          },
        ],
      },
    };
    renderWithProviders(<IndexPage />, { preloadedState });
    const user = userEvent.setup();

    const cart = screen.getByTestId('cart');
    const cartItems = cart.querySelectorAll('li');
    const removeFromCartBtn = cartItems[0].querySelector('button');

    expect(cartItems.length).toEqual(1);
    expect(cartItems[0]).toHaveTextContent(/ocean classic/i);

    if (removeFromCartBtn) await user.click(removeFromCartBtn);

    expect(cart.querySelectorAll('li').length).toBe(0);
  });
});
