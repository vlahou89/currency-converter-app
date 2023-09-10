import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CurrencyConverter from './';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('<CurrencyConverter />', () => {
  test('renders Currency Converter title', () => {
    render(
      <Provider store={store}>
        <CurrencyConverter />
      </Provider>
    );

    expect(screen.getByText('Currency Converter')).toBeTruthy();
  });
});
