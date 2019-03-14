import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { InputItem, Button, List } from 'antd-mobile';
// import '@/style/login.scss';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      passwordValue: '',
      value: '13966050302',
      msg: '发送验证码'
    }
  }
  onChange (value) {
    this.setState({
      value,
    });
  }
  onPasswordChange (passwordValue) {
    this.setState({
      passwordValue,
    });
  }
  onChangeRoute (value, passwordValue) {
      if (value.length !== "" && passwordValue.length !== "") {
        console.log(this)
      }
  }
  Setpass (value) {
    let timer = null
    let time = 60
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))){
      alert ('手机格式错误')
    } else {
      clearInterval(timer)
      timer = setInterval(() => {
        time--
        this.setState({
          msg: time + "后可重新发送"
        })
        if (time === 0) {
          this.setState({
            msg: "可免费再次重新发送" 
          })
          clearInterval(timer)
        }
      },1000)
    }
  }
  render () {
    let type = ''
      if ( this.state.passwordValue.length > 0 && this.state.value.length > 0) {
        type = 'primary'
      }
    return (
      <div className ="box">
      <header className = "header-flex">
        <NavLink to = { '/home' } className = "backe">
          <img src="//js.ibaotu.com/mobile/img/icons/main/icon_back_white.png" alt=""/>
        </NavLink>
        <h3>包图账号登录/注册</h3>
      </header>
      <div className = "content">
      <List renderHeader={() => 'Click label to focus input'} className = "phone">
          <InputItem
            value = { this.state.value }
            onChange={this.onChange.bind(this)}
             clear
            placeholder="请输入手机号">
            <div>
              <img src="//js.ibaotu.com/mobile/img/icons/login/icon_mphone.png" alt=""/>
            </div>
          </InputItem>
        </List>
        <List className = "pass">
          <InputItem
            value = { this.state.passwordValue }
            onChange={this.onPasswordChange.bind(this)}
            clear
            placeholder="请输入验证码">
            <div>
              <img src="//js.ibaotu.com/mobile/img/icons/login/icon_smsvcode.png" alt=""/>
            </div>           
          </InputItem>
        </List>
        <span onClick = {this.Setpass.bind(this, this.state.value)}>请输入验证码</span>
        <span className = "times">{ this.state.msg }</span>
        <Button type = { type } onClick = {this.onChangeRoute.bind(this, this.state.value, this.state.passwordValue)} >确定</Button>
        <div className = "QQ">
          <b>QQ登录</b>
        </div>
        <p>
        <NavLink to ="/qq">
        </NavLink>
        </p>      
        <p>注：微信用户电脑端绑定手机号即可使用该手机号登录</p>
        <s>登录即代表您同意《包图网络服务使用协议》&《包图隐私政策》</s>
      </div>
    </div>     
    )
  }
}

export default Com
