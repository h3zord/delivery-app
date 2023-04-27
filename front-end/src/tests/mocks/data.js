const date = '2023-04-27T19:34:27.000Z';
const customerName = 'Cliente Zé Birita';
const customerEmail = 'zebirita@email.com';
const sellerName = 'Fulana Pereira';
const sellerEmail = 'fulana@deliveryapp.com';
const inTransit = 'Em Trânsito';
const beerName = 'Heineken 600ml';
const urlImg = 'http://localhost:3001/images/heineken_600ml.jpg';

export const newAccount = {
  id: 4,
  email: 'test@test.com',
  password: '1bbd886460827015e5d605ed44252251',
  name: 'Lucas Chavarem',
  role: 'customer',
};

export const newUser = {
  id: 5,
  name: 'Lucas Chavarem',
  email: 'teste@teste.com.br',
  password: '96e79218965eb72c92a549dd5a330112',
  role: 'seller',
};

export const loginDataAdmin = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZ
  G1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0Ijo
  xNjgyNjIxNjU3LCJleHAiOjI1NDY1MzUyNTd9.oVdlOUi46aRLVuUxONP6dmqrCEVyiheL8DL-LxJrY9M`,
};

export const loginDataSeller = {
  id: 2,
  name: sellerName,
  email: sellerEmail,
  role: 'seller',
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJlaXJhI
  iwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY4MjYyODY
  4MSwiZXhwIjoyNTQ2NTQyMjgxfQ.c44yi_EApTbXFEPbMtPnracOSKastTPuYu-mSpOWxnw`,
};

export const loginDataCustomer = {
  id: 3,
  name: customerName,
  email: customerEmail,
  role: 'customer',
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpc
  ml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjgyNjE
  xNzMzLCJleHAiOjI1NDY1MjUzMzN9.em5U549dh2eFqfD40pUxRJVkFXkr7cDmvqWsPg6WXPo`,
};

export const usersList = [
  {
    email: sellerEmail,
    name: sellerName,
    role: 'seller',
  },
  {
    email: customerEmail,
    name: customerName,
    role: 'customer',
  },
  {
    email: 'teste@teste.com',
    name: 'testeeeeeeee',
    role: 'customer',
  },
];

export const sellersList = [
  {
    name: sellerName,
    email: sellerEmail,
    role: 'seller',
    id: 2,
  },
];

export const ordersList = [
  {
    deliveryAddress: 'test',
    deliveryNumber: 'test',
    id: 1,
    saleDate: date,
    sellerId: 2,
    status: 'Pendente',
    totalPrice: '7.50',
    userId: 3,
  },
  {
    deliveryAddress: 'test',
    deliveryNumber: 'test',
    id: 2,
    saleDate: date,
    sellerId: 2,
    status: 'Preparando',
    totalPrice: '7.50',
    userId: 3,
  },
  {
    deliveryAddress: 'test',
    deliveryNumber: 'test',
    id: 3,
    saleDate: date,
    sellerId: 2,
    status: inTransit,
    totalPrice: '7.50',
    userId: 3,
  },
];

export const ordersDetails1 = {
  deliveryAddress: 'test',
  deliveryNumber: 'test',
  id: 1,
  products: [
    {
      SaleProduct: { quantity: 1 },
      id: 2,
      name: beerName,
      price: '7.50',
      urlImage: urlImg,
    },
  ],
  saleDate: date,
  seller: {
    email: sellerEmail,
    id: 2,
    name: sellerName,
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
  status: 'Pendente',
  totalPrice: '7.50',
  user: {
    email: customerEmail,
    id: 3,
    name: customerName,
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
};

export const ordersDetails2 = {
  deliveryAddress: 'test',
  deliveryNumber: 'test',
  id: 3,
  products: [
    {
      SaleProduct: { quantity: 1 },
      id: 2,
      name: beerName,
      price: '7.50',
      urlImage: urlImg,
    },
  ],
  saleDate: date,
  seller: {
    email: sellerEmail,
    id: 2,
    name: sellerName,
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
  status: inTransit,
  totalPrice: '7.50',
  user: {
    email: customerEmail,
    id: 3,
    name: customerName,
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
};

export const productsList = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: '2.20',
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: 2,
    name: beerName,
    price: '7.50',
    urlImage: urlImg,
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: '2.49',
    urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  },
  {
    id: 4,
    name: 'Brahma 600ml',
    price: '7.50',
    urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
  },
  {
    id: 5,
    name: 'Skol 269ml',
    price: '2.19',
    urlImage: 'http://localhost:3001/images/skol_269ml.jpg',
  },
  {
    id: 6,
    name: 'Skol Beats Senses 313ml',
    price: '4.49',
    urlImage: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
  },
  {
    id: 7,
    name: 'Becks 330ml',
    price: '4.99',
    urlImage: 'http://localhost:3001/images/becks_330ml.jpg',
  },
  {
    id: 8,
    name: 'Brahma Duplo Malte 350ml',
    price: '2.79',
    urlImage: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
  },
  {
    id: 9,
    name: 'Becks 600ml',
    price: '8.89',
    urlImage: 'http://localhost:3001/images/becks_600ml.jpg',
  },
  {
    id: 10,
    name: 'Skol Beats Senses 269ml',
    price: '3.57',
    urlImage: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
  },
  {
    id: 11,
    name: 'Stella Artois 275ml',
    price: '3.49',
    urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
  },
];
