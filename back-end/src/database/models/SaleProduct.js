const SaleProduct = (sequelize, { INTEGER, STRING, DECIMAL, DATE }) => {
  const SaleProduct = sequelize.define(
    'SaleProduct',
    {
      quantity: {
        type: INTEGER,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'sales_products',
    }
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'productId', // se refere a outra chave de `users_books`
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId', // se refere ao id de User na tabela de `users_books`
      otherKey: 'saleId',
    });
  };

  return SaleProduct;
};

module.exports = SaleProduct;
