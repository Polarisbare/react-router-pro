/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-22 09:37:18
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-18 09:39:53
 * @FilePath: /react-router-pro/src/page/Board/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEexport
 */
import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
}
// useMemo 用于消耗非常大的做缓存

// memo 缓存  props不改变时不会重新渲染

// useCallback   缓存函数

const Board = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      我是面板
      {state}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
};
export default Board;
