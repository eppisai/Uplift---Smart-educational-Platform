const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api/*',
        createProxyMiddleware({
            target: 'http://localhost:5001',
            changeOrigin: true,
        })
    );

       app.use(
        '',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
       );
};
