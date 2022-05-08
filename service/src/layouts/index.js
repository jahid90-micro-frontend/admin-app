const express = require('express');

const _layouts = [
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
        _layouts.push({ id: _layouts.length, name: layout });
    };

    return {
        addNewLayout,
    };
};

const createQueries = ({ env }) => {
    const fetchAllLayouts = () => {
        return _layouts;
    };

    return {
        fetchAllLayouts,
    };
};

const createHttpHandlers = ({ actions, queries }) => {
    const handleAllLayouts = (req, res) => {
        const layouts = queries.fetchAllLayouts();
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
    const queries = createQueries({ env });
    const handlers = createHttpHandlers({ actions, queries });

    const router = express.Router();

    router.get('/', handlers.handleAllLayouts);
    router.post('/', handlers.handleAddLayout);

    console.debug('layouts app created');

    return router;
};

module.exports = createLayoutsApp;
