// webpack-hmr-middleware.js

const webpackDevMiddleware = require('webpack-dev-middleware');

function createWebpackHmrMiddleware(compiler, options) {
    const devMiddlewareInstance = webpackDevMiddleware(compiler, options);

    return function webpackHmrMiddleware(req, res, next) {
        // This middleware will handle incoming HTTP requests
        // You can implement additional logic here if needed
        // For example, logging, authentication, etc.
        
        devMiddlewareInstance(req, res, err => {
            if (err) {
                return next(err);
            }
            // Continue to next middleware
            next();
        });
    };
}

module.exports = createWebpackHmrMiddleware;
