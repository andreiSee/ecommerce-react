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

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /wärmepumpe/i,
    }).parentNode;
    const addToCartBtn = heading?.querySelector('button');

    if (addToCartBtn) await user.click(addToCartBtn);

    const cart = screen.getByTestId('cart');
    const cartItems = cart.querySelectorAll('li');

    expect(cartItems.length).toEqual(1);
    expect(cartItems[0]).toHaveTextContent(/wärmepumpe/i);
  });

  it('should remove the one item deleted of the cart', async () => {
    const preloadedState = {
      cart: {
        cartItems: [
          {
            id: 1,
            details: {
              id: 1,
              name: 'Wärmepumpe',
              description: 'No. 1 Wärmepumpe',
              price: 5100,
              currency: '€',
              img: 'waermepumpe.jpg',
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
    expect(cartItems[0]).toHaveTextContent(/wärmepumpe/i);

    if (removeFromCartBtn) await user.click(removeFromCartBtn);

    expect(cart.querySelectorAll('li').length).toBe(0);
  });
});
