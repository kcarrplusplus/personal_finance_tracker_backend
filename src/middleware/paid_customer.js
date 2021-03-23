const paidCustomer = (req, res, next) => {
    console.log('check if customer has paid');
    if (req) {
        console.log('paid');
    } else {
        console.log('free-tier');
    }
    next();
}

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

module.exports = {
    paidCustomer,
    requestTime
}