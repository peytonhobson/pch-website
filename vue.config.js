const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  transpileDependencies: true,
  publicPath: "",
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
  },
};
