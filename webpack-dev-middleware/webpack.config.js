const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const devMiddleware = require("./webpack-dev-middleware");

module.exports = (env, argv) => {
  const config = {
    entry: "./src/index.js",
    devServer: {
      static: "./dist",
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: "svg-inline-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          use: "babel-loader",
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    mode: argv.mode || "development",
  };

  // Create HMR middleware using webpack's compiler
  if (argv.mode === "development") {
    const compiler = webpack(config);
    const hmrMiddleware = devMiddleware(compiler, {
      publicPath: "/dist/", // Path to serve webpack-dev-middleware assets
      index: false, // Disable index.html serving from middleware
      writeToDisk: true, // Write files to disk in memoryFS
    });
    config.devServer.before = [hmrMiddleware];
  }

  return config;
};
