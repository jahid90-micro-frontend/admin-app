const mountRoutes = ({ app, env, config }) => {
    app.use('/', config.homeApp);
    app.use('/layouts', config.layoutsApp);
};

module.exports = mountRoutes;
