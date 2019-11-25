import 'babel-polyfill';
import './styles/css/index.css';
import './styles/less/index.less';

console.log('hello world');


if (module.hot) {
  // 实现热更新
  module.hot.accept();
}