import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testing login page', () => {
  it('Testing if all elements are on the screen', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const registerButton = screen.getByRole('button', { name: /ainda não tenho conta/i });
    const loginButton = screen.getByRole('button', { name: /login/i });
    const loginInput = screen.getByText('Login:');
    const passInput = screen.getByText('Senha');

    expect(registerButton).toBeDefined();
    expect(loginButton).toBeDefined();
    expect(loginButton).toBeDisabled();
    expect(loginInput).toBeDefined();
    expect(passInput).toBeDefined();
  });

  it('testing whether it returns an error when making an invalid login', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const loginInput = screen.getByText('Login:');
    const passInput = screen.getByText('Senha');

    userEvent.type(loginInput, 'test@test.com');
    userEvent.type(passInput, '000000');

    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(loginButton).toBeEnabled();

    userEvent.click(loginButton);

    const errorMsg = await screen.findByText('Falha ao fazer login!');

    expect(errorMsg).toBeDefined();
  });

  it('testing if it is redirected to the registration page', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const registerButton = screen.getByRole('button', { name: /ainda não tenho conta/i });

    userEvent.click(registerButton);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/register');
    });
  });
});
