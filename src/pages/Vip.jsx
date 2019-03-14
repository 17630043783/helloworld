import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '@/style/vip.scss';

class VipApp extends Component {
  constructor (props) {
    super(props)
    this.state  = {
      classname1: 'li-active-a',
      classname2: 'li-active',
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
      name:''
    }
  }
  changeclass1(){ 
    this.setState({
      classname1:"li-active-a",
      classname2:"li-active",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
      name:"全分类年"
    })
  }
  changeclass2(){
    this.setState({
      classname2:"li-active-a",
      classname1:"li-active",
      name:"全分类终身",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
    })
  }
  changeclass3(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"电商淘宝",
      classname3: 'li-active-a',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
    })
  }
  changeclass4(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"办公文档",
      classname3: 'li-active',
      classname4: 'li-active-a',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
    })
  }
  changeclass5(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"多媒体",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active-a',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
    })
  }
  changeclass6(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"插画配图",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active-a',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
    })
  }
  changeclass7(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"装饰装修",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active-a',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active',
    })
  }
  changeclass8(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"UI设计",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active-a',
      classname9: 'li-active',
      classname10: 'li-active',
    })
  }
  changeclass9(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"包图字体",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active-a',
      classname10: 'li-active',
    })
  }
  changeclass10(){
    this.setState({
      classname2:"li-active",
      classname1:"li-active",
      name:"摄影图",
      classname3: 'li-active',
      classname4: 'li-active',
      classname5: 'li-active',
      classname6: 'li-active',
      classname7: 'li-active',
      classname8: 'li-active',
      classname9: 'li-active',
      classname10: 'li-active-a',
    })
  }

  render () {
    return (
      <div className = "box">
        <header className = "header-flex">
          <NavLink to = { '/home' } className = "backe">
            <img src="//js.ibaotu.com/mobile/img/icons/main/icon_back_white.png" alt=""/>
          </NavLink>
          <h2>个人VIP</h2>
        </header>
        <div className = "content">
          <div className="banner">
            <p>开通VIP 畅享海量下载</p>
            <span>「术业有专攻 9大分类VIP供您选择」</span>
          </div>
          <div className="rec-content">
            <ul className="clearfix">
              <li className={ this.state.classname1 }  data-cate-id="12" onClick={ this.changeclass1.bind(this) }>
                {/* <img src="//js.ibaotu.com/mobile/img/icons/user/chaozhi.png" alt="" className = "xiao"/> */}
                <i className="icon_qz">
                  <img src="//js.ibaotu.com/mobile/img/icons/user/category/big-iconVip/icon_geren.png" alt=""/>
                </i>
                <span>全分类年VIP</span>
              </li>
              <li className={ this.state.classname2 } data-cate-id="13" onClick={ this.changeclass2.bind(this) }>
                <i className="icon_qz">
                <img src="//js.ibaotu.com/mobile/img/icons/user/category/big-iconVip/icon_geren.png" alt=""/>
                </i>
                <span>全分类终身VIP</span>
              </li>
              <li className={ this.state.classname3 } data-cate-id="2" onClick={ this.changeclass3.bind(this) } >
                <i className="icon_tb">
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon_tb.png" alt=""/>
                </i>
                <span>电商淘宝VIP</span>
              </li>
              <li className={ this.state.classname4 } data-cate-id="3" onClick={ this.changeclass4.bind(this) }>
                <i className="icon_of">
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon_of.png" alt=""/>
                </i>
                <span>办公文档VIP</span>
              </li>
              <li className={ this.state.classname5 } data-cate-id="4" onClick={ this.changeclass5.bind(this) } >
                <i className="icon_vd">
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon_vd.png" alt=""/>
                </i>
                <span>多媒体VIP</span>
              </li>
              <li className={ this.state.classname6 } data-cate-id="5" onClick={ this.changeclass6.bind(this) } >
                <i className="icon_ch">
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon_ch.png" alt=""/>
                </i>
                <span>插画配图VIP</span>
              </li>
              <li className={ this.state.classname7 } data-cate-id="6" onClick={ this.changeclass7.bind(this) } >
                <i className="icon_de">
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon_de.png" alt=""/>
                </i>
                <span>装饰装修VIP</span>
              </li>
              <li className={ this.state.classname8 } data-cate-id="7" onClick={ this.changeclass8.bind(this) } >
                <i className="icon_ui">
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon_ui.png" alt=""/>
                </i>
                <span>UI设计VIP</span>
              </li>
              <li className={ this.state.classname9 } data-cate-id="8" onClick={ this.changeclass9.bind(this) } >
                <i className="icon_zt">
                <img src="//js.ibaotu.com/mobile/img/icons/user/icon_zt.png" alt=""/>
                </i>
                <span>包图字体VIP</span>
              </li>
              <li className={ this.state.classname10 } data-cate-id="9" onClick={ this.changeclass10.bind(this) } >
                <i className="icon_sy">
                 <img src="//js.ibaotu.com/mobile/img/icons/user/icon_sy.png" alt=""/>
                </i>
                <span>摄影图VIP</span>
              </li>
            </ul>
        </div>
        <h3>全分类VIP八大特权</h3>
        <ul className = 'shiliang'>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_xz.png" alt=""/>
            <span>海量下载</span>
          </li>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_ss.png" alt=""/>
            <span>智能搜索</span>
          </li>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_gs.png" alt=""/>
            <span>高速下载</span>
          </li>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_tj.png" alt=""/>
            <span>智能推荐</span>
          </li>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_kf.png" alt=""/>
            <span>优先客服</span>
          </li>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_sy.png" alt=""/>
            <span>个人使用</span>
          </li>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_sc.png" alt=""/>
            <span>海量收藏</span>
          </li>
          <li className = 'f1'>
            <img src="//js.ibaotu.com/mobile/img/icons/user/img_sb.png" alt=""/>
            <span>海量下载</span>
          </li>
        </ul>
        <div id="vipbottom">立即开通{this.state.name}VIP</div>
      </div>
   </div>
    )
  }
}

export default VipApp
