const express = require('express');

const createHandlers = ({ env, evsClient }) => {
    const handleHome = (req, res) => {
        evsClient
            .ping()
            .then((data) => res.send(data))
            .catch((err) => {
                res.status(500).send(err.message);
            });
    };

    return {
        handleHome,
    };
};

const createHomeApp = ({ env, evsClient }) => {
    const handlers = createHandlers({ env, evsClient });

    const router = express.Router();

    router.get('/', handlers.handleHome);

    console.debug('home app created');

    return router;
};

module.exports = createHomeApp;
