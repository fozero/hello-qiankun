import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
  addErrorHandler,
} from "qiankun";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 异常捕获
addGlobalUncaughtErrorHandler((event) =>
  console.log("addGlobalUncaughtErrorHandler err", event)
);
addErrorHandler((err) => {
  console.log("addErrorHandler err", err);
});

registerMicroApps([
  {
    name: "childOne",
    //默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据
    entry: "//localhost:3001",
    //挂载到主应用的哪个元素下
    container: "#container",
    //当我劫持到路由地址为//child-one时，我就把http://localhost:3001这个应用挂载到#container的元素下
    activeRule: "/child-one",
  },
  {
    name: "childTwo",
    entry: "//localhost:3002",
    container: "#container",
    activeRule: "/child-two",
  },
]);
// 启动 qiankun
start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
