import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from '@/store';
// 这是我们自己封装的context 与react-redux官方的库实现的功能基本是一样的
import { StoreContext } from "./utils/context"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // 将store共享给组件
  <BrowserRouter>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)