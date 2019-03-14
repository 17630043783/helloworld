import React, {Component } from "react";
import { NavLink, Switch, Route, Redirect} from "react-router-dom";
import Home from "@/pages/Home";
import Kind from "@/pages/Kind";
// import Cart from "@/pages/Cart";
import User from "@/pages/User";
import Vip from "@/pages/Vip";
// import Search from "@/pages/Search";
import Fankui from "@/pages/Fankui";
import Kindexcel from "@/pages/Kindexcel";
import Kindword from "@/pages/Kindword";
import Kindchahua from "@/pages/Kindchahua";
import Kindpeiyue from "@/pages/Kindpeiyue";
import Kindppt from "@/pages/Kindppt";
import Kindsheying from "@/pages/Kindsheying";
import Kindyinxiao from "@/pages/Kindyinxiao";
import User2 from "@/pages/User2";

class App extends Component {
  render () {
    return (
      <div className="box">
        <Switch>
         <Route path="/user2" component ={ User2 }></Route>
          <Route path="/kindyinxiao" component ={ Kindyinxiao }></Route>
          <Route path="/kindsheying" component ={ Kindsheying }></Route>
          <Route path="/kindppt" component ={ Kindppt }></Route>
          <Route path="/kindpeiyue" component ={ Kindpeiyue }></Route>
          <Route path="/kindchahua" component ={ Kindchahua }></Route>
          <Route path="/kindexcel" component ={ Kindexcel }></Route>
          <Route path="/kindword" component ={ Kindword }></Route>
          <Route path="/fankui" component ={ Fankui }></Route>
          {/* <Route path="/search" component ={ Search }></Route> */}
          <Route path="/home" component ={ Home }></Route>
          <Route path="/kind" component ={ Kind }></Route>
          <Route path="/vip" component ={ Vip }></Route>
          {/* <Route path="/cart" component ={ Cart }></Route> */}
          <Route path="/user" component ={ User }></Route>
          <Redirect path = "/" to="/home" />
        </Switch>
        <footer className="footer">
          <ul>
            <NavLink to ="/home"><span className="iconfont icon-index"></span>首页</NavLink>
            <NavLink to="/kind"><span className="iconfont icon-fenlei"></span>分类</NavLink>
            <NavLink to="/vip"><span className="iconfont icon-huiyuan"></span>VIP会员</NavLink>
            <NavLink to ="/cart"><span className="iconfont icon-leimupinleifenleileibie"></span>专题</NavLink>
            <NavLink to="/user"><span className="iconfont icon-wodedangxuan"></span>用户</NavLink>
          </ul>
        </footer>
      </div>
    )
  }
}

export default App
