import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import { requestAdminRegister, requestAllUsers, requestLogin } from '../Services/Request';
import { loginDataAdmin, newUser, usersList } from './mocks/data';

jest.mock('../Services/Request');

describe('Testing admin page', () => {
  afterEach(() => jest.clearAllMocks());
  it('Testing if all elements are presents on screen', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    requestLogin.mockResolvedValue(loginDataAdmin);
    requestAllUsers.mockResolvedValue(usersList);

    const loginInput = screen.getByText('Login:');
    const passInput = screen.getByText('Senha');
    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(loginInput).toBeDefined();
    expect(passInput).toBeDefined();
    expect(loginButton).toBeDefined();

    userEvent.type(loginInput, 'adm@deliveryapp.com');
    userEvent.type(passInput, '--adm2@21!!--');
    userEvent.click(loginButton);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/admin/manage');
    });

    const fullNameInput = screen.getByText('Nome Completo');
    const emailInput = screen.getByText('Email');
    const passInput1 = screen.getByText('Senha');
    const type = screen.getByRole('combobox', { name: /tipo/i });
    const registerButton = screen.getByRole('button', { name: /cadastrar/i });

    expect(fullNameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passInput1).toBeDefined();
    expect(type).toBeDefined();
    expect(registerButton).toBeDefined();

    userEvent.type(fullNameInput, 'testeeeeeeee');
    userEvent.type(emailInput, 'adm@deliveryapp.com');
    userEvent.type(passInput1, '111111');
    userEvent.selectOptions(type, 'customer');
    userEvent.click(registerButton);

    const errorMsg = await screen.findByText('Falha ao cadastrar usuário!');

    expect(errorMsg).toBeDefined();

    userEvent.type(emailInput, 'teste@teste.com');

    requestAdminRegister.mockResolvedValue(newUser);

    userEvent.click(registerButton);

    const deleteButton = await screen.findAllByRole('button', { name: /excluir/i });

    expect(deleteButton).toBeDefined();

    userEvent.click(deleteButton[2]);

    const exitButton = await screen
      .findByTestId('customer_products__element-navbar-link-logout');

    expect(exitButton).toBeDefined();

    userEvent.click(exitButton);

    expect(history.location.pathname).toEqual('/login');
  });
});
