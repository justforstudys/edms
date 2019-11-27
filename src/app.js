import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import { adminRouter } from './routes';
import { Frame } from './components';


const menus = adminRouter.filter(item => {
  return item.isNav === true;
})
export default class App extends Component {
  render () {
    return (
      <Frame menus={menus}>
        <Switch>
          {
            adminRouter.map(route => {
              return <Route key={route.pathname} path={route.pathname} component={route.component}></Route>
            })
          }
          <Redirect to={adminRouter[0].pathname} from="/console" exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Frame>
    )
  }
}