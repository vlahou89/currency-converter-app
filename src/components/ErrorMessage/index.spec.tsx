import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ErrorMessage from './';

describe('ErrorMessage', () => {
  it('renders an error message', () => {
    const errorMessage = 'This is an error message';

    render(<ErrorMessage message={errorMessage} />);

    const errorAlert = screen.getByRole('alert');

    expect(errorAlert).toBeTruthy();

    const errorMessageText = screen.getByText(errorMessage);
    expect(errorMessageText).toBeTruthy();
  });
});
