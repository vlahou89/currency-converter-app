import React from 'react';

interface ResultDisplayProps {
  exchangeRate: number | null;
  targetCurrency: string;
  amount: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  exchangeRate,
  targetCurrency,
  amount,
}) => {
  return (
    <p className="text-lg md:text-2xl text-center pb-12 md:pb-0 text-sky-100 mt-12 underline underline-offset-8 decoration-pink-500  tracking-wider">
      Converted amount: {exchangeRate ? (amount * exchangeRate).toFixed(2) : 0}{' '}
      {targetCurrency.toUpperCase()}
    </p>
  );
};

export default ResultDisplay;
