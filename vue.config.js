const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "./",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8086',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // ← 正确写法
      },
    },
  },
  transpileDependencies: true,
});
