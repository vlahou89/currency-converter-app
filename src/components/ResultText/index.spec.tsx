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
    const expectedResult = (amount * exchangeRate).toFixed(2);

    const resultText = screen.getByText(`Result: ${expectedResult}`);
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

    const resultText = screen.queryByText('Result: ');
    expect(resultText).toBeNull();
  });
});
