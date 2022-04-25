const { Schema, model } = require('mongoose');

const bankSchema = Schema({
    name: {
      type: String,
      required: [true, 'Set name for bank'],
    },
    interestRate: {
      type: String,
      required: [true, 'Set interest rate for bank'],
    },
    maximumLoan: {
      type: String,
      required: [true, 'Set maximum load for bank'],
    },
    minimumDownPayment: {
      type: String,
      required: [true, 'Set minimum down payment for bank'],
    },
    loanTerm: {
      type: String,
      required: [true, 'Set loan term for bank'],
    }
  }, {
    versionKey: false,
    timeStamp: true,
    
});


const Bank = model('bank', bankSchema);

module.exports = Bank