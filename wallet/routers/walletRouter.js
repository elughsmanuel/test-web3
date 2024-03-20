const express = require('express');
const { getWalletBalance } = require('../controllers/walletController');

const walletRouter = express.Router();

walletRouter.get('/get-balance', getWalletBalance);

module.exports = walletRouter;
