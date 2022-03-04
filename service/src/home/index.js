const express = require('express');

const createHandlers = () => {
    const handleHome = (req, res) => {
        return res.send('OK');
    };

    return {
        handleHome,
    };
};

const createHomeApp = ({ env }) => {
    const handlers = createHandlers();

    const router = express.Router();

    router.get('/', handlers.handleHome);

    return router;
};

module.exports = createHomeApp;
