/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-21 11:11:31
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-02 17:22:55
 * @FilePath: /react-router-pro/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";

// 1 导入路由
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2 路由绑定 */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
