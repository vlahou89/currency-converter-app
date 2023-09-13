import React, { useState } from 'react';

interface CurrencyInputProps {
  amount: number;
  label: string;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  amount,
  label,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(amount.toString());

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;

    // Use a regular expression to validate and format the input.
    //replace any leading zeros with single 0
    const formattedInput = newInputValue
      .replace(/^0+/, '0')
      .replace(/^0+(\d)/, '$1');

    // Update the input value
    setInputValue(formattedInput);

    // Convert the formatted input to a number and validate
    const parsedAmount = parseFloat(formattedInput);

    // if the user enters a valid numberic input, the 'onChange' callback
    // is called with the parsed numberic value
    if (!isNaN(parsedAmount)) {
      onChange(parsedAmount);
      //else if the user enters 0 or leaves the inpute empty the onchange callback
      //is called with the value 0
    } else if (formattedInput === '0' || formattedInput === '') {
      onChange(0);
    }
  };

  return (
    <div className="flex flex-col m-auto w-full lg:py-6 lg:w-1/3">
      <label className="text-lg md:text-2xl text-sky-100 mt-4 tracking-wider pb-2 md:pb-4">
        {label}
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleAmountChange}
        className="p-2 rounded-xl border border-sky-400 focus:outline-none focus:ring-0 focus:border-green-500"
      />
    </div>
  );
};

export default CurrencyInput;
