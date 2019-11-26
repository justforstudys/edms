// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { minRouter } from './routes'
import 'antd/dist/antd.css';
import './styles/css/index.scss';
import './styles/less/index.less';
import App from './app';



ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/console" component={App}></Route>
      {
        minRouter.map(route => {
          return <Route key={route.pathname} path={route.pathname} component={route.component}></Route>
        })
      }
      <Redirect to="/login" from="/" exact></Redirect>
      <Redirect to="/404"></Redirect>
    </Switch>
  </Router>
  , document.getElementById('app') 
);



// if (module.hot) {
//   // 实现热更新
//   module.hot.accept();
// }