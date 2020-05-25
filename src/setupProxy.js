const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://europe-west1-chat-app-5c91e.cloudfunctions.net/api',
      changeOrigin: true,
    })
  );
};