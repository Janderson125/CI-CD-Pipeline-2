import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from '../ShoppingCart';

describe('ShoppingCart', () => {
  test('shows empty cart message when no items', () => {
    render(<ShoppingCart items={[]} onRemove={() => {}} />);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  test('renders items in cart', () => {
    const items = [{ name: 'Apple', price: 1 }, { name: 'Banana', price: 2 }];
    render(<ShoppingCart items={items} onRemove={() => {}} />);

    expect(screen.getByText(/Apple - \$1/i)).toBeInTheDocument();
    expect(screen.getByText(/Banana - \$2/i)).toBeInTheDocument();
    expect(screen.getByText(/Total: \$3/i)).toBeInTheDocument();
  });

  test('calls onRemove when remove button is clicked', () => {
    const items = [{ name: 'Orange', price: 5 }];
    const onRemoveMock = jest.fn();

    render(<ShoppingCart items={items} onRemove={onRemoveMock} />);

    fireEvent.click(screen.getByText(/remove/i));
    expect(onRemoveMock).toHaveBeenCalledTimes(1);
    expect(onRemoveMock).toHaveBeenCalledWith(0);
  });
});
