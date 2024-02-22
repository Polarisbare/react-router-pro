/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-22 09:34:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-22 09:55:30
 * @FilePath: /react-router-pro/src/page/Layout/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      一级路由Layout
      <Link to="/">面板</Link>
      <Link to="/about">关于</Link>
      {/* 配置二级路由出口 */}
      <Outlet />
    </div>
  );
};

export default Layout;
