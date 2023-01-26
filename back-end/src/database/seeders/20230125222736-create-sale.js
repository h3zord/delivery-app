'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales',
    [
      {
        id: 1,
        userId: 3,
        sellerId: 2,
        totalPrice:23.80,
        deliveryAddress:'Rua Irmão Monteiro, Bairo Pedras, 851',
        deliveryNumber:'',
        saleDate:08/04/21,
        status:'Pendente',
      },
      {
        id: 2,
        userId: 3,
        sellerId: 2,
        totalPrice:14.20,
        deliveryAddress:'Rua Vila Bela, Bairro Gurupi, 670',
        deliveryNumber:'',
        saleDate:08/04/21,
        status:'Preparando',
      },
      {
        id: 3,
        userId: 3,
        sellerId: 2,
        totalPrice:28.46,
        deliveryAddress:'Rua Rua Sessenta e Dois, Bairro Maranguape II, 533',
        deliveryNumber:'',
        saleDate:07/04/21,
        status:'Entrege',
      },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
