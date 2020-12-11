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
    fallback: {"path": false}
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader", options: {plugins: ["react-refresh/babel"]}}
        ]
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
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
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser"
    })
  ]
};
