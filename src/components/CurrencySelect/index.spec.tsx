import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CurrencySelect from './';

describe('CurrencySelect', () => {
  test('renders with the provided value and options', () => {
    const label = 'From';
    const value = 'USD';
    const options = [
      { code: 'USD', name: 'United States Dollar' },
      { code: 'EUR', name: 'Euro' },
    ];
    const onChange = () => {};

    render(
      <CurrencySelect
        label={label}
        value={value}
        options={options}
        onChange={onChange}
        disabled={false}
      />
    );

    const selectElement = document.querySelector(
      'select'
    ) as HTMLSelectElement | null;
    expect(selectElement).toBeTruthy();

    const labelElement = selectElement?.previousElementSibling as HTMLElement;
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toBe(`${label}:`);

    expect(selectElement?.value).toBe(value);
    expect(selectElement?.options.length).toBe(options.length);
    options.forEach((option, index) => {
      expect(selectElement?.options[index].value).toBe(option.code);
      expect(selectElement?.options[index].textContent).toBe(option.name);
    });
  });
});
