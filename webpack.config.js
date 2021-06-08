const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        exclude: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                compileType: "icss",
              },
            },
          },
          "resolve-url-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                compileType: "module",
              },
            },
          },
          { loader: "resolve-url-loader" },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
    hot: true,
    inline: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/main.html" })],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
