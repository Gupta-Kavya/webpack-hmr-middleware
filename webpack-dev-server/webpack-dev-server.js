const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = {
  // Your webpack configuration options here
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Use path.resolve for absolute path
    clean: true,
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
  mode: "development",
};

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

server.listen(3000, "localhost", () => {
  console.log("Webpack development server is running on localhost:3000");
});
