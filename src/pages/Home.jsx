import React, { Component } from 'react';
import List from '@/components/home/List';
import ListDianshang from '@/components/home/ListDianshang';
import ListQiye from '@/components/home/ListQiye';
import ListChahua from '@/components/home/ListChahua';
import ListSheying from '@/components/home/ListSheying';
import { Carousel } from 'antd-mobile';
import store from '@/store';
import api from '@/api/home/index';
import { NavLink, Link } from "react-router-dom";
import '@/style/home.scss';
class Com extends Component {
 
  constructor(props) {
    super (props);
    this.state = {
    imgHeight: 176,
    }
  }
  componentDidMount () {
    console.log(this);
    // api.requestData().then(data => {
    //   console.log(data)
    //   this.setState({
    //     list: data
    //   })
    // });
    // api.requestBanner().then(data => {
    //   console.log(data)
    //   this.setState({
    //    bannerdata: data 
    //   })
    // })
    api.requestData().then(data => {
      console.log(1111111111111)
      // console.log(data)
      store.dispatch({type: 'CHANGE_LIST_DATA', data})
    })
    api.requestBanner().then(data => {
      // console.log(data)
      store.dispatch({type: 'CHANGE_BANNER_DATA', data})
    })
    api.requestTaobaoData().then(data => {
      // console.log(data)
      store.dispatch({type: 'CHANGE_DIANSHANG_DATA', data})
    })
    api.requestQiyeData().then(data => {
      // console.log(data)
      store.dispatch({type: 'CHANGE_QIYE_DATA', data})
    })
    api.requestChahuaData().then(data => {
      // console.log(data)
      store.dispatch({type: 'CHANGE_CHAHUA_DATA', data})
    })
    api.requestSheyingData().then(data => {
      // console.log(data)
      store.dispatch({type: 'CHANGE_SHEYING_DATA', data})
    })
  }
  render () {
    // console.log(this);
    // console.log(store.getState().homestore.bannerdata) //返回应用当前的state树
    return (
      <div>
        <header className="header">
        <div className="home-header">
          <i className="pb-icon icon-logo"></i>
          <div className="home-search-wrap">
            <NavLink to ="/search" className="home-search but-search ">
            <i className="iconfont icon-sousuo"></i>
            <input type="text" placeholder='请输入关键字' id="so-kw" className="home-search-inp header-search-inp"/>
            </NavLink>
          </div>
          <div className="user-feedback">
          <Link to ="/fankui" className="fankui"><img src="//js.ibaotu.com/mobile/img/icons/public/icon_feedback.png"  alt=""/></Link>
          </div>
        </div>
      </header>
        <div className = "content">
      <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {store.getState().homestore.bannerdata.map((item,index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item.smallImage}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <ul className="bottomUl">
          <li className="hot2">
            <NavLink to = "/kindppt">
              <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_ppt.png" alt=""/></span>           
              <i className="icon-hot2"></i>
              <p>PPT模板</p>
            </NavLink>
          </li>
          <li>
            <NavLink to = "/kindsheying">
              <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_poster.png" alt=""/></span>
                <p>海报模板</p>
            </NavLink>
            </li>
          <li>
            <NavLink to = "/kindpeiyue">
              <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_video.png" alt=""/></span>
                <p>视频模板</p>
            </NavLink>
          </li>
          <li>
            <NavLink to = "/kind">
              <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_tb.png" alt=""/></span>
                <p>电商模板</p>
            </NavLink>
          </li>
        </ul>
        <ul className="bottomUl">
          <li>
            <NavLink to = "/kindchahua">
              <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_illu.png" alt=""/></span>
              <p>插画配图</p>
            </NavLink>
          </li>
          <li className="mad2">
            <NavLink to = "/kindppt">
              <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_vip.png" alt=""/></span>
                  <i className="icon-mad2"></i>
                <p>个人VIP</p>
            </NavLink>
          </li>
          <li>
          <NavLink to = "/kindppt">
          <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_comVip2.png" alt=""/></span>
            <p>企业VIP</p>
            </NavLink>
          </li>
          <li>
            <NavLink to = "/cart">
              <span><img src="//js.ibaotu.com/mobile/img/icons/home/nav_topic.png" alt=""/></span>
                <p>精选专题</p>
            </NavLink>
          </li>
        </ul>
      <List list = { store.getState().homestore.list }/> 
      <ListDianshang dianshangdata = { store.getState().homestore.dianshangdata }/>
      <ListQiye qiyedata = { store.getState().homestore.qiyedata }/>
      <ListChahua chahuadata = { store.getState().homestore.chahuadata }/>
      <ListSheying sheyingdata = { store.getState().homestore.sheyingdata }/>
      </div>
      </div>
    )
  }
}
export default Com
