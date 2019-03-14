import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route} from 'react-router-dom'
import App from "@/layout/App";
import UserApp from "@/layout/UserApp";
import DetailApp from "@/layout/DetailApp";
import SearchApp from "@/layout/SearchApp";

import Cart from "@/pages/Cart";
import './main.scss';
import store from './store';


function renderFn () {
  ReactDOM.render(
    <Router>
      <Switch>
          <Route path= "/search" component = { SearchApp } />
          <Route path= "/cart" component = { Cart } />
          <Route path= "/detailapp" component = { DetailApp } />
          <Route path= "/userapp" component = { UserApp } />
          <Route path= "/" component = { App } />
      </Switch>
    </Router>,
    document.getElementById("root"));
}
renderFn();
// 添加一个变化监听器 每当dispatch(action)的时候 就会执行 state 树中的一部分可能已经变化
store.subscribe(renderFn);
