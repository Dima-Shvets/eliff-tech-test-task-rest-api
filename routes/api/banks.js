const express = require('express');

const { ctrlWrapper } = require('../../middlewares');

const banksControllers = require('../../controllers/banks');

const router = express.Router()

router.get('/',  ctrlWrapper(banksControllers.getBanks));

router.get('/:bankId', ctrlWrapper(banksControllers.getBankById));

router.post('/',  ctrlWrapper(banksControllers.postBank));

router.delete('/:bankId', ctrlWrapper(banksControllers.deleteBank))

router.put('/:bankId',  ctrlWrapper(banksControllers.putBank))

module.exports = router
