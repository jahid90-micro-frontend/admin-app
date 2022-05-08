const mountRoutes = ({ app, env, config }) => {
    app.use('/', config.homeApp);
    app.use('/layouts', config.layoutsApp);
    app.use('/pages', config.pagesApp);

    console.debug('Mounted routes');
};

module.exports = mountRoutes;
