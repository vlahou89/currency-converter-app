## :notebook_with_decorative_cover: Currency Coverter:notebook_with_decorative_cover:

The Currency Converter allows the user to enter an amount, choose a base and a target currency. Once any of these values change, the converted amount will get updated automatically, as well as the exchange rate for the current exchange.

If the user enters a negative amount, an error message will appear, and the Currency dropdowns will also be disabled until the user enters an amount greater or equal to zero.

If the Base Currency and Target Currency are the same, their values will get swapped (similar behavior to Google Currency Converter).

The Currency Converter is responsive, with the layout remaining horizontal for tablets and desktops and becoming vertical for mobiles. On tablets and larger screens, the components are displayed in a row.

![](app.gif)

## :computer: Technologies used:

- React.js

- Typescript

- Vite

- Vitest

- TailwindCSS

- Axios
- Redux Tooklit

## :iphone:Responsiveness

The layout remains horizontal for tablets and desktops and becomes vertical for mobiles.
![](responsive.jpg)

## :exclamation:Validation

When the user enters a negative amount, the exchange rate display text disappears, the dropdowns are disabled, and an error message appears.

![](Validation.jpg)

## `:memo:Approach used

- Redux Toolkit has been used to manage the state and create the actions for the app (store.ts, currencySlice.ts, types.ts). The store file has the store configuration, while the currencySlice defines how the states are managed. The types file defines the TypeScript types for type safety. Finally, the App is wrapped with the Provider and the store to use it in the project.

- A custom hook, 'useCurrencyData,' has been created to fetch currency data and exchange rates using Axios and update the Redux store with the fetched data.

- The project has been broken down into smaller components, such as CurrencyInput, CurrencySelect, ResultText, etc., and each component includes a Vitest test.

- A CurrencyConverterWrapper file has been created, including wrapper styles for the Currency Converter.
