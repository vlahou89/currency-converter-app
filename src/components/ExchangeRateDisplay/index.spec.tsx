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

    const formattedExchangeRate = exchangeRate?.toFixed(2);
    const exchangeRateText = screen.getByText(
      `1 ${baseCurrency} = ${formattedExchangeRate ?? ''} ${targetCurrency}`
    );
    expect(exchangeRateText).toBeTruthy();
  });
});
