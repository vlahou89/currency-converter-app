import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ResultText from './';

describe('ResultDisplay', () => {
  it('renders result when exchangeRate is not null', () => {
    const exchangeRate = 1.2323;
    const amount = 100;
    const targetCurrency = 'EUR';

    render(
      <ResultText
        exchangeRate={exchangeRate}
        amount={amount}
        targetCurrency={targetCurrency}
      />
    );

    // Use a custom text matcher function
    const resultText = screen.getByText((content) => {
      const hasExpectedText = content.includes('Converted amount:');
      const hasExpectedValue = content.includes(
        (amount * exchangeRate).toFixed(2)
      );
      const hasExpectedCurrency = content.includes(
        targetCurrency.toUpperCase()
      );
      return hasExpectedText && hasExpectedValue && hasExpectedCurrency;
    });

    expect(resultText).toBeTruthy();
  });

  it('does not render result when exchangeRate is null', () => {
    const exchangeRate = null;
    const amount = 100;

    render(
      <ResultText
        exchangeRate={exchangeRate}
        amount={amount}
        targetCurrency={''}
      />
    );

    // Use a custom text matcher function
    const resultText = screen.queryByText((content) => {
      const hasExpectedText = content.includes('Converted amount:');
      const hasExpectedValue = content.includes('0.00'); // Expected value when exchangeRate is null
      return hasExpectedText && hasExpectedValue;
    });

    expect(resultText).toBeNull();
  });
});
