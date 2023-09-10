import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CurrencyInput from './';

describe('CurrencyInput', () => {
  test('renders with the provided amount', () => {
    const amount = 50;
    const onChange = () => {};

    render(<CurrencyInput amount={amount} onChange={onChange} />);

    const input = document.querySelector('input') as HTMLInputElement | null;
    expect(input).toBeTruthy();
  });
});
