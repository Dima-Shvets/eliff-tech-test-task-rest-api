const { Bank } = require('../../models');

const deleteBank = async (req, res, next) => {
  const removedBank = await Bank.findByIdAndRemove(req.params.bankId);

  if (!removedBank) {
    res.status(404).json({ status:"error", code:404, message: "Not found"})
  }
  res.json({ status: "success", code: 200, payload: {bank: removedBank}})
}

module.exports = deleteBank;