const { Bank } = require('../../models');

const getBanks = async (req, res, next) => {
  const banks = await Bank.find({});
  res.json({status: "success ", code: 200, payload : {banks}})
}

module.exports = getBanks;
