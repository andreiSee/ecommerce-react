import { it, expect, describe } from 'vitest';
import { renderWithProviders } from '../src/utilities/testUtils';
import IndexPage from '../src/pages/IndexPage';
import { screen } from '@testing-library/react';

describe('Shopping Page', () => {
  it.each([
    { headline: 'products', searchFor: /produkte/i },
    { headline: 'cart', searchFor: /warenkorb/i },
  ])('should display the $headline section.', ({ searchFor }) => {
    renderWithProviders(<IndexPage />);

    const heading = screen.getByRole('heading', { level: 2, name: searchFor });
    expect(heading).toBeInTheDocument();
  });
});
