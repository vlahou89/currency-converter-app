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

      const availableCurrencies = Object.keys(currencyData).map((code) => ({
        code,
        name: currencyData[code].code,
      }));

      const baseCurrencyOption = {
        code: baseCurrency,
        name: baseCurrency,
      };

      const targetCurrencyOption = {
        code: targetCurrency,
        name: targetCurrency,
      };
      console.log(currencyData[targetCurrency]?.name, ' targetcurrency');

      const filteredCurrencies = availableCurrencies.filter(
        (currency) =>
          currency.code !== baseCurrency && currency.code !== targetCurrency
      );

      const updatedCurrencies = [
        baseCurrencyOption,
        targetCurrencyOption,
        ...filteredCurrencies,
      ];

      const newExchangeRate = currencyData[targetCurrency]?.rate ?? null;

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
