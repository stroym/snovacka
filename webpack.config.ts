import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import {ForkTsCheckerWebpackPlugin} from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin";

//TODO setup environments
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    open: true,
    hot: true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]s(x?)$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader", options: {plugins: ["react-refresh/babel"]}},
          {loader: "ts-loader", options: {transpileOnly: true}}
        ]
      },
      {
        test: /\.md$/,
        use: ["html-loader", "markdown-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ]
};