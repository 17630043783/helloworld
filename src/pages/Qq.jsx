import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '@/style/qq.scss';

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      msg: '一键登录'
    }
  }
  onchangeData () {
    this.setState({
      msg: '正在拉起扣扣手机版...'
    })
    setTimeout(() => {
      alert('请安装最新版本的QQ手机版')
     this.setState({
       msg: '一键登录'
     })
    }, 2000);
     this.setState({
      msg: '正在拉起扣扣手机版...'
    })
  }
  render () {
    return (
      <div className ="box">
        <header className = "header-flex">
          <NavLink to ="/userapp/login" className = "backe">
            <img src="//js.ibaotu.com/mobile/img/icons/main/icon_back_white.png" alt=""/>
          </NavLink>
        </header>
        <div className = "content">
          <div className = "imgs">
            <img src="//imgcache.qq.com/ptlogin/v4/style/42/images/logo_upice.png?v=20180125" alt=""/>
            <p>亿万用户已选择QQ帐号登录应用</p>
          </div>
          <div className = "logo" onClick = {this.onchangeData.bind(this)}>{ this.state.msg }</div>
          <div className = "center">
            <h4>包图网将获得以下权限:</h4>
            <div className = "center-t">
              <b>√</b>
              <p>访问你的详细资料(必选)</p>
            </div>
            <div className = "center-t">
              <b>√</b>
              <p>访问你的基础资料(必选)</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com
