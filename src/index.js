import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/css/index.css';
import './styles/less/index.less';
import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}