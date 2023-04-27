import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testing orders page', () => {
  it('Testing if all elements are presents on screen', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const loginInput = screen.getByText('Login:');
    const passInput = screen.getByText('Senha');

    userEvent.type(loginInput, 'zebirita@email.com');
    userEvent.type(passInput, '$#zebirita#$');

    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(loginButton).toBeEnabled();

    userEvent.click(loginButton);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/customer/products');
    });

    const myOrders = screen.getByRole('link', { name: /meus pedidos/i });

    userEvent.click(myOrders);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/customer/orders');
    });

    const orderButton = await screen.findByRole('button', { name: /pedido1 em preparo 26\/04\/2023 3,49/i });

    userEvent.click(orderButton);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/customer/orders/1');
    });

    const detailsTitle = await screen.findByText('Detalhes do pedido');
    const orderInfo = await screen.findByText('PEDIDO:1');
    const orderInfo1 = await screen.findByText('P. Vend:Fulana Pereira');
    const orderInfo2 = await screen.findByText('26/04/2023');
    const orderInfo3 = await screen.findByText('Em preparo');
    const orderTable = await screen.findByRole('table');

    expect(detailsTitle).toBeDefined();
    expect(orderInfo).toBeDefined();
    expect(orderInfo1).toBeDefined();
    expect(orderInfo2).toBeDefined();
    expect(orderInfo3).toBeDefined();
    expect(orderTable).toBeDefined();
  });
});
