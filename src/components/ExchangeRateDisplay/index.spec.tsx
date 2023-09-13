import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExchangeRateDisplay from './';

describe('ExchangeRateDisplay', () => {
  it('renders exchange rate when exchangeRate is not null', () => {
    const baseCurrency = 'USD';
    const targetCurrency = 'EUR';
    const exchangeRate = 1.2323;
    const amount = 100;

    render(
      <ExchangeRateDisplay
        baseCurrency={baseCurrency}
        targetCurrency={targetCurrency}
        exchangeRate={exchangeRate}
        amount={amount}
      />
    );

    // Define the expected text based on the component's structure
    const expectedText = `Exchange rate: 1 ${baseCurrency.toUpperCase()} = ${exchangeRate.toFixed(
      6
    )} ${targetCurrency.toUpperCase()}`;

    // Use the screen.getByText() to find the element by its expected text
    const exchangeRateText = screen.getByText(expectedText);

    // Assert that the element with the expected text exists
    expect(exchangeRateText).toBeTruthy();
  });
});
