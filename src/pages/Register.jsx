import React, { Component } from 'react'
import { InputItem, Toast, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import api from '@/api/user';
import { Link, NavLink} from "react-router-dom";
import '@/style/login.scss';

class Com extends Component {
constructor (props) {
  super(props);
  this.state = {
      hasError: false,
      hasPasswordError: false,
      hasPassword1Error: false,
      value: '',
      passwordvalue: '',
      password1value:''
    }
  }

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请正确输入手机格式');
    }
  }
  onpasswordErrorClick =() => {
    if (this.state.hasPasswordError) {
      Toast.info('密码格式错误，请重新输入');
    }
  }
  onpassword1ErrorClick =() => {
    if (this.state.hasPassword1Error) {
      Toast.info('密码格式错误，请重新输入');
    }
  }

  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  onpasswordChange = (passwordvalue) => {
    if (passwordvalue.replace(/\s/g, '').length < 5) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      passwordvalue,
    });
  }
  onpassword1Change = (password1value) => {
    if (password1value.replace(/\s/g, '').length < 5) {
      this.setState({
        hasPassword1Error: true,
      });
    } else {
      this.setState({
        hasPassword1Error: false,
      });
    }
    this.setState({
      password1value,
    });
  }
  loginFn (username,password) {
    console.log(username,password)
    api.requestregisterData(username,password)
    .then( data => {
      console.log(data);
       if (data.data === 1) {
          Toast.success('注册成功', 1);
          this.props.history.push('/userapp/login')
        } else if (data.data === 0) {
          Toast.info('用户已注册，请登录', 1);
        } else if (data.data === -1) {
          Toast.fail('注册失败', 1);
        } 
    })
  }
  render () {
    console.log(this)
    let type = "";
    let disabled = true
    console.log();
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.hasPassword1Error === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0 && this.state.password1value.length > 0 && this.state.passwordvalue === this.state.password1value) {
      type = 'primary';
      disabled = false
    } 
    return (
      <div className="box">
        <header className="loginheader">
        <Link to="/userapp/login" className="iconfont icon-icon"></Link>
        <h2>包图账号注册</h2>
      </header>
      <div className = "content">
       <div className="user">
       <InputItem
            type="number"
            placeholder="请输入手机号"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange.bind(this)}
            value={this.state.value}
          ></InputItem>
         </div>
         <div className="pass">
         <InputItem
            type="password"
            placeholder="请输入密码"
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordErrorClick}
            onChange={this.onpasswordChange}
            value={this.state.passwordvalue}
          ></InputItem>
         </div>
         <div className="pass1">
         <InputItem
            type="password"
            placeholder="请再次输入密码"
            error={this.state.hasPassword1Error}
            onErrorClick={this.onPassword1ErrorClick}
            onChange={this.onpassword1Change}
            value={this.state.password1value}
          ></InputItem>
         </div>
        <div className="but">
        <Button type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this, this.state.value,this.state.passwordvalue)}>注册</Button>
        </div>
        <div className="qq">
              <h6>QQ登录</h6>
        </div>
        <div className="shuoming">
              <p><NavLink to ="/userapp/qq" className="qqlogo"></NavLink></p>   
              <p>注：微信用户电脑端绑定手机号即可使用该手机号登录</p>
              <s>登录即代表您同意《包图网络服务使用协议》&《包图隐私政策》</s>
        </div>
      </div>
      </div>
    )
  }
}

export default Com
