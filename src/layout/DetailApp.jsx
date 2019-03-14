import React, {Component } from "react";
import {  Route, Switch} from "react-router-dom";
import Detail from "@/pages/Detail";
import QyDetail from "@/pages/QyDetail";
import SyDetail from "@/pages/SyDetail";
import ChDetail from "@/pages/ChDetail";

import  ExcelDetail from "@/pages/ExcelDetail";
import  WordDetail from "@/pages/WordDetail";
import  YxDetail from "@/pages/YxDetail";
import  PyDetail from "@/pages/PyDetail";

class App extends Component {
  render () {
    return (
      <Switch>
          <Route path="/detailapp/detail/:id" component ={ Detail }></Route>
          <Route path="/detailapp/qydetail/:id" component ={  QyDetail }></Route>
          <Route path="/detailapp/sydetail/:id" component ={  SyDetail }></Route>
          <Route path="/detailapp/chdetail/:id" component ={  ChDetail }></Route>

          <Route path="/detailapp/exceldetail/:id" component ={  ExcelDetail }></Route>
          <Route path="/detailapp/worddetail/:id" component ={  WordDetail }></Route>
          <Route path="/detailapp/yxdetail/:id" component ={  YxDetail }></Route>
          <Route path="/detailapp/pydetail/:id" component ={  PyDetail }></Route>
      </Switch>
    )
  }
}

export default App
