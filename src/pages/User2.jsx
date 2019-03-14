import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom';
import '@/style/user.scss';
import {Toast} from 'antd-mobile';

class Com extends Component {
      constructor (props) {
        super(props)
        this.state= {
          data:[],
          flag:true,
          denglu:'退出登录'
        }
      }
  goPageFn (type) {
    console.log(this)
    this.props.history.push('/userapp/' + type)
  }
  play () {
   if(localStorage.getItem('isLogin') ==='ok'){
      var data = JSON.parse(localStorage.getItem("numberdata"))
      console.log(data)
      this.setState({
        data:data
      })
      // data.map((item,index,array) => {
      //   console.log(item.number)
      // })
    }else {
        console.log(this)
        var a = this.props.history.push;
        var time= window.setTimeout(function(){
         a('/userapp/login')
        },1000)
        Toast.info('抱歉，您还没有登录!', 1)
      }
    }
  loginout(){
    this.setState({
      denglu:'账号登录'
    })
    this.props.history.push('/userapp/login')
  }
  render () {
    return (
      <div className = "box">
        <header className = "header-flex">
          <NavLink to = { '/' } className = "backe">
            <img src="//js.ibaotu.com/mobile/img/icons/main/icon_back_white.png" alt=""/>
          </NavLink>
          <h2>个人中心</h2>
        </header>
         <div className = "content">
          <div className = "user-t">
            <div className = "user-t-l">
              <img src="//pic.ibaotu.com/head/default.png" alt=""/>
            </div>
            <div className = "user-t-r">
            <div className = "user-t-r-t">
              <span>139****0302</span>
              <p>(ID:21723997)</p>
            </div>
            <div className = "user-t-r-b">
              <img src="//js.ibaotu.com/mobile/img/icons/user/cateVip/ad.png" alt=""/>
              <img src="//js.ibaotu.com/mobile/img/icons/user/cateVip/tb.png" alt=""/>
              <img src="//js.ibaotu.com/mobile/img/icons/user/cateVip/audio.png" alt=""/>
              <img src="//js.ibaotu.com/mobile/img/icons/user/cateVip/office.png" alt=""/>
              <img src="//js.ibaotu.com/mobile/img/icons/user/cateVip/deco.png" alt=""/>
              <img src="//js.ibaotu.com/mobile/img/icons/user/cateVip/illi.png" alt=""/>
              <img src="//js.ibaotu.com/mobile/img/icons/user/cateVip/ui.png" alt=""/>
            </div>
            </div>
          </div>
          <div className = "banners"></div>
          <ul className = "center-t">
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/minepage_vip_icon.png" alt=""/>
              <div className = "lis">
                <p>我的会员</p>
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
              </div>
            </li>
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/icon_my_reden.png" alt=""/>
              <div className = "lis">
                <p>我的红包</p>
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
              </div>
            </li>
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/icon_my_invite.png" alt="" className = "image"/>
              <div className = "last">
                <p>推荐包图网给好友</p>
                <span className = "lasts">邀请可得680元红包</span>
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
              </div>
            </li>
          </ul>

          <ul className="center-b">
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/minepage_sc_icon.png" alt=""/>
              <div className = "lis">
                <Link to="/userapp/shoucang" onClick={this.play.bind(this)}>我的收藏</Link>
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
              </div>
            </li>
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/minepage_register_icon.png" alt=""/>
              <div className = "lis">
                <p>注册方式</p>
                <div className = "rights">
                  <p>PHONE</p>
                  {/* <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/> */}
                </div> 
              </div>
            </li>
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/minepage_shouji_icon.png" alt=""/>
              <div className = "lis">
                <p>手机</p>
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
              </div>
            </li>
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/minepage_email_icon.png" alt=""/>
              <div className = "lis">
                <p>邮箱</p>
                <div className = "rights">
                  <p>未绑定</p>
                  <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
                </div>    
              </div>
            </li>
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/minepage_purpose_icon.png" alt=""/>
              <div className = "lis">
                <p>使用用途</p>
                <div className = "rights">
                  <p>未设置</p>
                  <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
                </div>    
              </div>
            </li>
            <li>
              <img src="//js.ibaotu.com/mobile/img/icons/user/icon_user_fankui.png" alt=""/>
              <div className = "lis">
                <Link to="/fankui">在线反馈</Link>
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon-backs.png" alt=""/>
              </div>
            </li>
          </ul>
          <div className = "nologin" onClick={this.loginout.bind(this)}>{this.state.denglu}</div> 
        </div>
      </div>
     
    )
  }

}

export default Com
