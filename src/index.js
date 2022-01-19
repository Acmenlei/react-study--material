import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import 'moment/locale/zh-cn'
// antd 默认具有按需加载的效果 并且加载的是默认主题
// import 'antd/dist/antd.css'

// 如果我想改变antd的主题 就需要去修改webpack的相关配置
// 所以我们可以通过craco工具来帮助我们去修改webpack的相关配置
// 修改主题之后我们需要加载的文件就是antd.less
import 'antd/dist/antd.less'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)