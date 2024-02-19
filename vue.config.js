module.exports = {
  transpileDependencies: true,
  publicPath: "",
  configureWebpack: {
    output: {
      // Cache assets for 1 hour
      maxAge: 3600000,
    },
  },
};
