const { Bank } = require('../../models');

const postBank = async (req, res, next) => {
  const newBank = await Bank.create({...req.body})
  res.status(201).json({ status: "success", code: 201, payload: {bank: newBank} })
}

module.exports = postBank;