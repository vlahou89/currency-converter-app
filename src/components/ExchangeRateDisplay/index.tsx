import React from 'react';

interface ExchangeRateDisplayProps {
  baseCurrency: string;
  targetCurrency: string;
  exchangeRate: number | null;
  amount: number;
}

const ExchangeRateDisplay: React.FC<ExchangeRateDisplayProps> = ({
  baseCurrency,
  targetCurrency,
  exchangeRate,
}) => {
  return (
    <div>
      {exchangeRate !== null && (
        <>
          <p className="text-md md:text-2xl text-sky-100 mt-8 mb-6 md:mt-12 text-center underline underline-offset-8 decoration-sky-500 tracking-wider">
            Exchange rate: 1 {baseCurrency.toUpperCase()} ={' '}
            {exchangeRate.toFixed(6)} {targetCurrency.toUpperCase()}
          </p>
        </>
      )}
    </div>
  );
};

export default ExchangeRateDisplay;
