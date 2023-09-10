import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setBaseCurrency,
  setTargetCurrency,
  setAmount,
} from '../../redux/currencySlice';
import { RootState } from '../../redux/types';
import useCurrencyData from '../../hooks/useCurrencyData';
import CurrencyInput from '../CurrencyInput';
import CurrencySelect from '../CurrencySelect';
import ExchangeRateDisplay from '../ExchangeRateDisplay';
import ResultText from '../ResultText';
import ErrorMessage from '../ErrorMessage';
import CurrencyConverterWrapper from '../CurrencyConverterWrapper';

const CurrencyConverter: React.FC = () => {
  const dispatch = useDispatch();
  const { baseCurrency, targetCurrency, amount, exchangeRate, currencies } =
    useSelector((state: RootState) => state.currency);

  useCurrencyData(baseCurrency, targetCurrency, amount);

  const selectedBaseCurrency = currencies.find(
    (currency) => currency.code === baseCurrency
  );
  const selectedTargetCurrency = currencies.find(
    (currency) => currency.code === targetCurrency
  );
  const negativeAmount = amount < 0;

  return (
    <CurrencyConverterWrapper>
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-sky-100 mt-0">
        Currency Converter
      </h1>
      {!negativeAmount && (
        <ExchangeRateDisplay
          baseCurrency={selectedBaseCurrency?.name || ''}
          targetCurrency={selectedTargetCurrency?.name || ''}
          exchangeRate={exchangeRate}
          amount={amount}
          data-testid="exchange-rate-display"
        />
      )}
      <div className="flex flex-col md:flex-row space-between w-full">
        <CurrencyInput
          amount={amount}
          onChange={(newAmount) => dispatch(setAmount(newAmount || 0))}
          data-testid="currency-input"
        />
        <CurrencySelect
          label="From"
          value={baseCurrency}
          options={currencies}
          onChange={(newBaseCurrency) => {
            if (newBaseCurrency === targetCurrency) {
              dispatch(setTargetCurrency(baseCurrency));
              dispatch(setBaseCurrency(targetCurrency));
            } else {
              dispatch(setBaseCurrency(newBaseCurrency));
            }
          }}
          data-testid="base-currency-select"
          disabled={negativeAmount}
        />
        <CurrencySelect
          label="To"
          value={targetCurrency}
          options={currencies}
          onChange={(newTargetCurrency) => {
            if (newTargetCurrency === baseCurrency) {
              dispatch(setBaseCurrency(targetCurrency));
              dispatch(setTargetCurrency(baseCurrency));
            } else {
              dispatch(setTargetCurrency(newTargetCurrency));
            }
          }}
          data-testid="target-currency-select"
          disabled={negativeAmount}
        />
      </div>
      {!negativeAmount ? (
        <ResultText
          exchangeRate={exchangeRate}
          amount={amount}
          targetCurrency={targetCurrency}
        />
      ) : (
        <ErrorMessage
          message="Please enter an amount greater than zero in order to see the currency conversion"
          type={'error'}
        />
      )}
    </CurrencyConverterWrapper>
  );
};

export default CurrencyConverter;
