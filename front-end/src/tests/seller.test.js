import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import { getProductSale, requestLogin, requestOrders } from '../Services/Request';
import { loginDataSeller, ordersDetails1, ordersList } from './mocks/data';

jest.mock('../Services/Request');

describe('Testing seller page', () => {
  afterEach(() => jest.clearAllMocks());

  it('Testing if all elements are presents on screen', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    requestLogin.mockResolvedValue(loginDataSeller);
    requestOrders.mockResolvedValue(ordersList);
    getProductSale.mockResolvedValue(ordersDetails1);

    const loginInput = screen.getByText('Login:');
    const passInput = screen.getByText('Senha');
    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(loginInput).toBeDefined();
    expect(passInput).toBeDefined();
    expect(loginButton).toBeDefined();

    userEvent.type(loginInput, 'fulana@deliveryapp.com');
    userEvent.type(passInput, 'fulana@123');
    userEvent.click(loginButton);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/seller/orders');
    });

    const orderButton = screen.getByRole('link', { name: /pedidos/i });
    const sellerName = screen.getByText('Fulana Pereira');
    const exitButton = screen.getByRole('link', { name: /sair/i });
    const order = await screen.findByRole('link', { name: /pedido 1 pendente 2023-04-27t19:34:27\.000z 7\.50 test/i });

    expect(orderButton).toBeDefined();
    expect(sellerName).toBeDefined();
    expect(exitButton).toBeDefined();
    expect(order).toBeDefined();

    userEvent.click(order);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/seller/orders/1');
    });

    const detailsTitle = screen.getByText('Detalhe do Pedido');
    const detailsInfo = await screen.findAllByText('Pedido1');
    const detailsInfo1 = await screen.findByText('27/04/2023');
    const detailsInfo2 = await screen
      .findByTestId('seller_order_details__element-order-details-label-delivery-status');
    const orderButton1 = await screen.findByRole('button', { name: /preparar pedido/i });
    const orderButton2 = await screen.findByRole('button', { name: /saiu para entrega/i });
    const table = await screen.findByRole('table');
    const totalPrice = await screen.findByText('Total: R$');

    expect(detailsTitle).toBeDefined();
    expect(detailsInfo).toBeDefined();
    expect(detailsInfo1).toBeDefined();
    expect(detailsInfo2).toBeDefined();
    expect(orderButton1).toBeDefined();
    expect(orderButton2).toBeDefined();
    expect(table).toBeDefined();
    expect(totalPrice).toBeDefined();

    userEvent.click(orderButton1);
    userEvent.click(orderButton2);

    userEvent.click(exitButton);
  });
});
