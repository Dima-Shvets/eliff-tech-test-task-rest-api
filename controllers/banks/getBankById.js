const { Bank } = require('../../models');

const getBankById = async (req, res, next) => {
  const bank = await Bank.findById(req.params.bankId);

  if (!bank) {
    return res.status(404).json({ status: "error", code: 404, message: "Not found"})
  }

  res.json({ status: "success", code: 200, payload: {bank} })
}

module.exports = getBankById;