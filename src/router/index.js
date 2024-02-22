/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-21 11:29:13
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-22 11:15:53
 * @FilePath: /react-router-pro/src/router/index.js
 * @Description:路由表
 */
import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Board /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:name",
    element: <Article />,
  },
  {
    // 404
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
