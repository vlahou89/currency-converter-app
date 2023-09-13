import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  baseCurrency: string;
  targetCurrency: string;
  exchangeRate: number | null;
  currencies: { code: string; name: string }[];
}

const initialState: CurrencyState = {
  baseCurrency: 'gbp',
  targetCurrency: 'eur',
  exchangeRate: null,
  currencies: [],
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload;
    },
    setTargetCurrency: (state, action: PayloadAction<string>) => {
      state.targetCurrency = action.payload;
    },

    setExchangeRate: (state, action: PayloadAction<number | null>) => {
      state.exchangeRate = action.payload;
    },
    setCurrencies: (
      state,
      action: PayloadAction<{ code: string; name: string }[]>
    ) => {
      state.currencies = action.payload;
    },
  },
});

export const {
  setBaseCurrency,
  setTargetCurrency,
  setExchangeRate,
  setCurrencies,
} = currencySlice.actions;

export default currencySlice.reducer;
