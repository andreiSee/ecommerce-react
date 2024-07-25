import { it, expect, describe } from 'vitest';
import { renderWithProviders } from '../src/utilities/testUtils';
import IndexPage from '../src/pages/IndexPage';
import { screen } from '@testing-library/react';

describe('Cart', () => {
  it('should be empty in the first place.', () => {
    renderWithProviders(<IndexPage />);

    expect(screen.getByText(/warenkorb ist leer/i)).toBeInTheDocument();
  });
});
