import { useParams } from "react-router-dom";

/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-21 11:26:23
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-22 09:29:45
 * @FilePath: /react-router-pro/src/page/Article/index.js
 * @Description: 文章页面
 */
const Article = () => {
  // useSearchParams
  // const [params] = useSearchParams();
  // const id = params.get("id");
  // const name = params.get("name");

  const params = useParams();
  const id = params.id;
  const name = params.name;
  return (
    <div>
      我是文章页面{id}-{name}
    </div>
  );
};
export default Article;
