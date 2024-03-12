import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig, { output } from './webpack.config.js'; // Assuming your webpack configuration file is named webpack.config.js

// Create webpack compiler instance
const compiler = webpack(webpackConfig);

// Create webpack dev middleware instance
const devMiddleware = webpackDevMiddleware(compiler, config);

// Export the middleware function
export default devMiddleware;
