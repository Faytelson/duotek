const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/duotek/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/global.scss";`,
      },
    },
  },
  transpileDependencies: true,
});
