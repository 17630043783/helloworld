import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Com extends Component {

  goPageFn(type) {
    console.log(this);
    this.props.history.push('/userapp/' +type)
  }
  render () {
    return (
      <div className = "content">
        用户
        {/* 声明式跳转 */}
         <Link to ="/userapp/login">登录</Link>
        <Link to ="/userapp/register" >注册</Link> 
        
        {/* 编程式跳转 */}
        {/* <button onClick = {this.goPageFn.bind(this,'login')}>登录</button>
        <button onClick = {this.goPageFn.bind(this,'register')}>注册</button> */}
      </div>
    )
  }

}

export default Com
