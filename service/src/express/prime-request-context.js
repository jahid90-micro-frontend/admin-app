const { v4: uuid } = require('uuid');

const primeRequestContext = (req, res, next) => {
    req.context = {
        ...req.context,
        requestId: uuid(),
    };

    next();
};

module.exports = primeRequestContext;
