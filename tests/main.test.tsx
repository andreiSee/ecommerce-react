import { it, expect, describe } from 'vitest';
import { renderWithProviders } from '../src/utilities/test-utils';
import IndexPage from '../src/pages/IndexPage';
import { screen } from '@testing-library/react';

describe('Shopping Page', () => {
  it.each([
    { headline: 'products', searchFor: /produkte/i },
    { headline: 'cart', searchFor: /warenkorb/i },
  ])('should display the $headline section.', ({ searchFor }) => {
    renderWithProviders(<IndexPage />);

    const h2List = screen.getAllByRole('heading', { level: 2 });
    const hasHeadline = h2List.find((h2) => h2.textContent?.match(searchFor));
    expect(hasHeadline).toBeTruthy();
  });
});
