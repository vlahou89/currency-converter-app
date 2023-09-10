import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setExchangeRate,
  setCurrencies,
  setBaseCurrency,
} from '../redux/currencySlice';
import axios from 'axios';

const useCurrencyData = (
  baseCurrency: string,
  targetCurrency: string,
  amount: number
) => {
  const dispatch = useDispatch();

  const fetchCurrencyDataAndExchangeRate = async () => {
    try {
      const response = await axios.get(
        `http://www.floatrates.com/daily/${baseCurrency}.json`
      );
      const currencyData = response.data;

      // Create an array of available currencies with their codes and names
      const availableCurrencies = Object.keys(currencyData).map((code) => ({
        code,
        name: currencyData[code].code,
      }));

      // Define options for the base and target currencies
      const baseCurrencyOption = {
        code: baseCurrency,
        name: baseCurrency,
      };

      const targetCurrencyOption = {
        code: targetCurrency,
        name: targetCurrency,
      };

      // Filter out the base and target currencies from the available currencies
      const filteredCurrencies = availableCurrencies.filter(
        (currency) =>
          currency.code !== baseCurrency && currency.code !== targetCurrency
      );

      // Update the base, target, and filtered currencies
      const updatedCurrencies = [
        baseCurrencyOption,
        targetCurrencyOption,
        ...filteredCurrencies,
      ];

      // Get the exchange rate for the target currency, or null if not available
      const newExchangeRate = currencyData[targetCurrency]?.rate ?? null;

      // Dispatch Redux actions to update the state
      dispatch(setBaseCurrency(baseCurrency));
      dispatch(setCurrencies(updatedCurrencies));
      dispatch(setExchangeRate(newExchangeRate));
    } catch (error) {
      console.error('Error fetching currency data and exchange rate:', error);
    }
  };

  useEffect(() => {
    fetchCurrencyDataAndExchangeRate();
  }, [baseCurrency, targetCurrency, amount]);
};

export default useCurrencyData;
