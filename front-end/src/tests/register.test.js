import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import { requestRegister } from '../Services/Request';

jest.mock('../Services/Request');

describe('Testing register page', () => {
  afterEach(() => jest.clearAllMocks());

  it('testing if you register a new account successfully', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/register');

    requestRegister.mockResolvedValue({
      id: 14,
      email: 'test@test.com',
      password: '1bbd886460827015e5d605ed44252251',
      name: 'Lucas Chavarem',
      role: 'customer',
    });

    const nameInput = screen.getByText('Nome');
    const emailInput = screen.getByText('E-mail');
    const passInput = screen.getByText('Password');
    const registerButton = screen.getByRole('button', { name: /cadastrar/i });

    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passInput).toBeDefined();
    expect(registerButton).toBeDefined();
    expect(registerButton).toBeDisabled();

    userEvent.type(nameInput, 'testeeeeeeee');
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passInput, '111111');

    userEvent.click(registerButton);
  });

  it('testing whether it returns an error when registering fails', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/register');

    const nameInput = screen.getByText('Nome');
    const emailInput = screen.getByText('E-mail');
    const passInput = screen.getByText('Password');
    const registerButton = screen.getByRole('button', { name: /cadastrar/i });

    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passInput).toBeDefined();
    expect(registerButton).toBeDefined();
    expect(registerButton).toBeDisabled();

    userEvent.type(nameInput, 'testeeeeeeee');
    userEvent.type(emailInput, 'fulana@deliveryapp.com');
    userEvent.type(passInput, '111111');

    userEvent.click(registerButton);

    const errorMsg = await screen.findByText('Falha ao fazer cadastro!');

    expect(errorMsg).toBeDefined();
  });
});
