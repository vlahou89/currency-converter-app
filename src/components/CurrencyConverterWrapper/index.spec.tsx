import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CurrencyConverterWrapper from './';

describe('CurrencyConverterWrapper', () => {
  it('renders children', () => {
    render(
      <CurrencyConverterWrapper>
        <div data-testid="child-element">Child Content</div>
      </CurrencyConverterWrapper>
    );

    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeTruthy();
  });

  // Add more test cases as needed to cover different scenarios.
});
