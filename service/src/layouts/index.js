const express = require('express');

const layouts = [
    {
        id: 1,
        name: 'single-column-with-nav',
    },
    {
        id: 2,
        name: 'dual-column-with-nav',
    },
];

const createActions = ({ env }) => {
    const addNewLayout = ({ layout }) => {
        layouts.push({ id: layouts.length, name: layout });
    };

    return {
        addNewLayout,
    };
};

const createHttpHandlers = ({ actions }) => {
    const handleAllLayouts = (req, res) => {
        res.json(layouts);
    };

    const handleAddLayout = (req, res) => {
        const { layout } = req.body;

        actions.addNewLayout({ layout });

        // 202 - Accepted
        res.sendStatus(202);
    };

    return {
        handleAllLayouts,
        handleAddLayout,
    };
};

const createLayoutsApp = ({ env }) => {
    const actions = createActions({ env });
    const handlers = createHttpHandlers({ actions });

    const router = express.Router();

    router.get('/', handlers.handleAllLayouts);
    router.post('/', handlers.handleAddLayout);

    return router;
};

module.exports = createLayoutsApp;
