const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    alias: {
      common: path.join(basePath, 'src/common'),
      router: path.join(basePath, 'src/router'),
      pods: path.join(basePath, 'src/pods'),
      scenes: path.join(basePath, 'src/scenes'),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  devtool: "eval-source-map",
  entry: {
    app: ["./index.tsx"],
  },
  stats: "errors-only",
  output: {
    filename: "./js/[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=5000",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[id].css"
    }),
  ],
};
