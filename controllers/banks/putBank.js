const { Bank } = require('../../models');

const putBank = async (req, res, next) => {
  const updatedBank = await Bank.findByIdAndUpdate(req.params.bankId, req.body, {new:true});

  if (!updatedBank) {
    res.status(404).json({ status: "error", code:404, message: "Not found"})
  }
  res.json({ status: "success", code: 200, payload: {bank: updatedBank} });
}

module.exports = putBank;