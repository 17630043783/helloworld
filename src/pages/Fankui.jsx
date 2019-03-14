import React, { Component } from 'react'
import '@/style/fankui.scss';
import { Link } from "react-router-dom";
class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {
      textvalue: '',
      valuelength:0
    }
    this.onchange = this.onchange.bind(this);
  }
  onchange (event) {
    // console.log(event.target);
    this.setState({
      textvalue: event.target.value,
      valuelength: event.target.value.length
    })
  }
  submit () {
    if(this.state.textvalue.length  === 0) {
      alert("请输入反馈内容")
    } else {
      alert("提交成功，非常感谢您对我们的宝贵意见！")
      this.setState({
        textvalue: ''
      })
    }
  }
  render () {
    return (
      <div>
        <header className="header">
        <Link to="/home" className="iconfont icon-icon"></Link>
        <h2>我的反馈</h2>
      </header>
        <div className = "content">
          <form action="" id="subFrom">
            {/* <input type="hidden" name="fankui" value=""  placeholder='请在此输入您要反馈的内容'/> */}
            <div className="user-feedback1">
              <textarea placeholder="请在此输入您要反馈的内容" id="area"  name="content" value={ this.state.textvalue } onChange={ this.onchange} >
              </textarea>
              <div className="word-nums">您已经输入{ this.state.valuelength }字</div>
              <div className="online-kf">在线客服：<Link to="" className="zixun">在线咨询</Link></div>
              <div className="submit-button">
                <p onClick={ this.submit.bind(this) } className ="submit" >提交</p>
              </div>
            </div>
          </form>
       </div>
      </div>

    )
  }

}

export default Com
