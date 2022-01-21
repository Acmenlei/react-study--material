import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from "@/router"

// 在react-router-dom 6.0 之后 就不需要react-router-config来生成路由了
// 官方给出了hooks useRoutes来动态生成路由
export default function App() {
  return <div>
    <Link to="/">首页</Link>
    <Link to="/test">test</Link>
    {useRoutes(routes)}
  </div>;
}
