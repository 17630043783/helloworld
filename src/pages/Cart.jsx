import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { NavLink } from 'react-router-dom';
import List from '@/components/zhuanti/List';
import api from '@/api/zhuanti';
import '@/style/cart.scss';

const tabs = [
  { title: <Badge>精选推荐</Badge> },
  { title: <Badge>流行风格</Badge> },
  { title: <Badge>商务设计</Badge> },
  { title: <Badge>插画精选</Badge> },
  { title: <Badge>节日庆典</Badge> },
  { title: <Badge>用户热搜</Badge> } ,
  { title: <Badge>时尚高端</Badge> }
];

class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    api.requestData().then(data => {
      this.setState({
        list: data
      })
    })
  }
  onscroll () {
    // const tab = document.getElementById('tab')
  }
  render () {
    return (
      <div className = "box">
        <header className = "header-flex">
          <NavLink to = { '/' } className = "backe">
            <img src="//js.ibaotu.com/mobile/img/icons/main/icon_back_white.png" alt=""/>
          </NavLink>
          <h2>精选推荐</h2>
    </header>
    <div className = "content">
    <div className="topic-cot">
        <div className="top"></div>
            <Tabs tabs={tabs} initialPage={1} onChange={(tab, index) => { console.log('onChange', index, tab); }} onTabClick={(tab, index) => { console.log('我点击了', index); 
            api.requestKind(index).then(data => {
              this.setState({
                list: data
                })
            })
          }}>
            <div>
              <List list = { this.state.list } />
            </div>
            <div>
              <List list = { this.state.list } />
            </div>
            <div>
              <List list = { this.state.list } />
            </div>
            <div>
              <List list = { this.state.list } />
            </div>
            <div>
              <List list = { this.state.list } />
            </div>
            <div>
              <List list = { this.state.list } />
            </div>
            <div>
              <List list = { this.state.list } />
            </div>
          </Tabs>
      </div>
    </div>
    <footer className="footer">
          <ul>
            <NavLink to ="/home"><span className="iconfont icon-index"></span>首页</NavLink>
            <NavLink to="/kind"><span className="iconfont icon-fenlei"></span>分类</NavLink>
            <NavLink to="/vip"><span className="iconfont icon-huiyuan"></span>VIP会员</NavLink>
            <NavLink to ="/cart"><span className="iconfont icon-leimupinleifenleileibie"></span>专题</NavLink>
            <NavLink to="/user"><span className="iconfont icon-wodedangxuan"></span>用户</NavLink>
          </ul>
        </footer>
    </div>
    )
  }
}
export default Com
