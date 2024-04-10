const { StatusCodes } = require('http-status-codes');
const { Web3 } = require('web3');

exports.getWalletBalance = async (req, res, next) => {
    try {
        const { id } = req.query;

        const web3 = new Web3('https://eth.llamarpc.com');

        console.log(id);

        const balance = await web3.eth.getBalance(id);

        console.log(balance);

        return res.status(StatusCodes.OK).json({
            success: true,
            data: balance,
        });
    } catch(error) {
        next(error);
    }
};
