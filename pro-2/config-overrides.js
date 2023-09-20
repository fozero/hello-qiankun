/* config-overrides.js */

// react-app-rewired使用文档 https://github.com/timarney/react-app-rewired

const path = require("path");
const paths = require("react-scripts/config/paths");

const { name } = require("./package");

paths.appBuild = path.join(path.dirname(paths.appBuild), "dist");

// 方式1：导出单个方法
// module.exports = function override(config, env) {
//   //add resolve alias
//   if (config.resolve && config.resolve.alias) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": path.resolve(__dirname, "src"),
//     };
//   }

//   // config.output.library = `${name}-[name]`;
//   // config.output.libraryTarget = "umd";
//   // // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
//   // config.output.jsonpFunction = `webpackJsonp_${name}`;
//   // config.output.globalObject = "window";
//   return config;
// };

// 方式2：导出对象
// 允许开发环境跨域和 umd 打包
module.exports = {
  webpack: function (config, env) {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = "window";
    return config;
  },

  devServer: (_) => {
    const config = _;
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
