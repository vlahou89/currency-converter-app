import React from 'react';

interface CurrencySelectProps {
  label: string;
  value: string;
  options: { code: string; name: string }[];
  onChange: (value: string) => void;
  disabled: boolean;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  label,
  value,
  options,
  onChange,
  disabled = false,
}) => {
  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  const selectClassName = `p-2 rounded-xl border border-sky-400 focus:outline-none focus:ring-0 focus:border-green-500 ${
    disabled ? 'disabled-select' : ''
  }`;

  return (
    <div className="flex flex-col m-auto w-full md:pl-6 lg:w-1/3 mt-4 md:mt-0 md:mb-8">
      <label className="md:text-2xl text-sky-100 md:mt-12 tracking-wider pb-2 md:pb-4">
        {label}:
      </label>
      <select
        value={value}
        onChange={handleCurrencyChange}
        disabled={disabled}
        className={selectClassName}
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.code.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
