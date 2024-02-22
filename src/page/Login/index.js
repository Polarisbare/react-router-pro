/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-21 11:27:54
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-22 09:26:09
 * @FilePath: /react-router-pro/src/page/Login/index.js
 * @Description:  登录页面
 */
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是登录页面
      {/* 声明式写法 */}
      <Link to="/article">跳转到文章页面</Link>
      {/* 编程式写法 */}
      <button onClick={() => navigate("/article")}>按钮跳转路由</button>
      <button onClick={() => navigate("/article?id=1001&name=jack")}>
        SearchParams传参数
      </button>
      <button onClick={() => navigate("/article/1001/jack")}>
        params传参数
      </button>
    </div>
  );
};
export default Login;
