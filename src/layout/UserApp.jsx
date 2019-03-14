import React, {Component } from "react";
import { Switch, Route} from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Qq from "@/pages/Qq";
import Shoucang from "@/pages/Shoucang";
class App extends Component {
  render () {
    return (
      <div className="box">
        {/* <Yheader className="header">头部</Yheader> */}
        <Switch>
         <Route path="/userApp/shoucang" component ={ Shoucang }></Route>
          <Route path="/userApp/qq" component ={ Qq }></Route>
          <Route path="/userApp/register" component ={ Register }></Route>
          <Route path="/userApp/login" component ={ Login }></Route>
        </Switch>
      </div>
    )
  }
}

export default App
