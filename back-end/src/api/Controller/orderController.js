const orderService = require('../Services/orderService');

  const getAll = async (req, res) => {
    const { id } = req.body;
    const orders = await orderService.getAllById(id);

    return res.status(200).json(orders);
  };

module.exports = {
  getAll,
};