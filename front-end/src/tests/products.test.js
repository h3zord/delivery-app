import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testing products page', () => {
  it('Testing if all elements are on the screen', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/customer/products');

    const productButton = screen.getByRole('link', { name: /produtos/i });
    const ordersButton = screen.getByRole('link', { name: /meus pedidos/i });
    const exitButton = screen.getByRole('link', { name: /sair/i });
    const productImg = await screen.findAllByRole('img', { name: /product-logo/i });
    const productName = screen.getByText('Skol Lata 250ml');
    const productPrice = screen.getByText('R$ 2,20');
    const productSub = await screen.findAllByRole('button', { name: /-/i });
    const inputQuantity = await screen.findAllByRole('spinbutton');
    const productSum = await screen.findAllByRole('button', { name: /\+/i });
    const quantityInput = await screen.findAllByRole('spinbutton');
    const carButton = await screen.findByText('0,00');

    expect(productButton).toBeDefined();
    expect(ordersButton).toBeDefined();
    expect(exitButton).toBeDefined();
    expect(productImg).toBeDefined();
    expect(productName).toBeDefined();
    expect(productPrice).toBeDefined();
    expect(productSub).toBeDefined();
    expect(inputQuantity).toBeDefined();
    expect(productSum).toBeDefined();
    expect(quantityInput).toBeDefined();
    expect(carButton).toBeDefined();
  });

  it('simulating the purchase of products', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const loginInput = screen.getByText('Login:');
    const passInput = screen.getByText('Senha');
    const loginButton = screen.getByRole('button', { name: /login/i });

    userEvent.type(loginInput, 'zebirita@email.com');
    userEvent.type(passInput, '$#zebirita#$');
    userEvent.click(loginButton);

    const sumButton = await screen.findAllByRole('button', { name: /\+/i });
    const subButton = await screen.findAllByRole('button', { name: /-/i });
    const inputQuantity = await screen.findAllByRole('spinbutton');
    const carButton = await screen.findByRole('button', { name: /ver carrinho:/i });

    userEvent.click(sumButton[1]);
    userEvent.click(sumButton[1]);
    userEvent.click(subButton[1]);
    userEvent.type(inputQuantity[0], '1');
    userEvent.click(carButton);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/customer/checkout');
    });

    const clientName = screen.getByText('Cliente Zé Birita');
    const titleText = screen.getByRole('heading', { name: /finalizar pedido/i });
    const item = screen.getAllByRole('columnheader', { name: /item/i });
    const description = screen.getByRole('columnheader', { name: /descrição/i });
    const quantity = screen.getByRole('columnheader', { name: /quantidade/i });
    const price = screen.getByRole('columnheader', { name: /valor unitário/i });
    const subPrice = screen.getByRole('columnheader', { name: /sub-total/i });
    const removeItem = screen.getAllByRole('columnheader', { name: /remover item/i });
    const itemNumber = screen.getAllByRole('cell', { name: /1/i });
    const nameItem = screen.getByRole('cell', { name: /skol lata 250ml/i });
    const priceItem = screen.getAllByRole('cell', { name: /2,20/i });
    const removeButton = screen.getAllByRole('button', { name: /remover/i });
    const totalPrice = screen.getByText('Total: R$9,70');
    const infoText = screen.getByText('Detalhes e Endereço para Entrega');
    const sellerName = screen.getByRole('combobox');
    const infoInputs = screen.getAllByRole('textbox');
    const finishButton = await screen.findByRole('button', { name: /finalizar pedido/i });

    expect(clientName).toBeDefined();
    expect(titleText).toBeDefined();
    expect(item).toBeDefined();
    expect(description).toBeDefined();
    expect(quantity).toBeDefined();
    expect(price).toBeDefined();
    expect(subPrice).toBeDefined();
    expect(removeItem).toBeDefined();
    expect(itemNumber).toBeDefined();
    expect(nameItem).toBeDefined();
    expect(priceItem).toBeDefined();
    expect(removeButton).toBeDefined();
    expect(totalPrice).toBeDefined();
    expect(infoText).toBeDefined();
    expect(sellerName).toBeDefined();
    expect(infoInputs).toBeDefined();
    expect(finishButton).toBeDefined();

    userEvent.click(removeButton[0]);
    userEvent.type(infoInputs[0], 'test');
    userEvent.type(infoInputs[1], 'test');
    userEvent.click(finishButton);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/customer/orders/3');

      const exitButton = screen.getByRole('link', { name: /sair/i });

      expect(exitButton).toBeDefined();

      userEvent.click(exitButton);
    });
  });
});
