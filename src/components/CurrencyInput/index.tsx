import React from 'react';

interface CurrencyInputProps {
  amount: number;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ amount, onChange }) => {
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(event.target.value);
    onChange(newAmount);
  };

  return (
    <div className="flex flex-col m-auto w-full lg:py-6 lg:w-1/3">
      <label className="text-lg md:text-2xl text-sky-100 mt-4 tracking-wider pb-2 md:pb-4">
        Amount:
      </label>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        className="p-2  rounded-xl border border-sky-400 focus:outline-none focus:ring-0 focus:border-green-500"
      />
    </div>
  );
};

export default CurrencyInput;
