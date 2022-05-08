const express = require('express');
const { v4: uuid } = require('uuid');

const _streamName = 'microf-pages';

const createActions = ({ env, evsClient }) => {
    const addNewPage = ({ data, context }) => {
        const message = {
            id: uuid(),
            type: 'AddNewPage',
            streamName: _streamName,
            data,
            metadata: {
                traceId: context.traceId,
            },
        };

        return evsClient.addNewPage(message);
    };

    return {
        addNewPage,
    };
};
const createQueries = ({ env, evsClient }) => {
    const fetchAllPages = ({ context }) => {
        return evsClient.fetchPages({ streamName: _streamName });
    };

    return {
        fetchAllPages,
    };
};

const createHandlers = ({ actions, queries }) => {
    const handleListPages = (req, res) => {
        queries
            .fetchAllPages({ context: { traceId: req.context.traceId } })
            .then((pages) => res.json(pages))
            .catch((err) => res.status(500).send(err.message));
    };

    const handleAddNewPage = (req, res) => {
        console.debug(req.body);

        const sampleData = {
            id: 100,
            title: 'Test',
            layout: 'single-column-with-nav',
            slots: [
                {
                    id: 'nav',
                },
                {
                    id: 'ad',
                },
                {
                    id: 1,
                },
                {
                    id: 'footer',
                },
            ],
        };

        actions
            .addNewPage({ data: sampleData, context: { traceId: req.context.traceId } })
            .then(() => res.sendStatus(202))
            .catch((err) => res.status(500).send(err.message));
    };

    return {
        handleListPages,
        handleAddNewPage,
    };
};

const createPagesApp = ({ env, evsClient }) => {
    const actions = createActions({ env, evsClient });
    const queries = createQueries({ env, evsClient });
    const handlers = createHandlers({ actions, queries });

    const router = express.Router();

    router.get('/', handlers.handleListPages);
    router.post('/', handlers.handleAddNewPage);

    console.debug('Created PagesApp');

    return router;
};

module.exports = createPagesApp;
