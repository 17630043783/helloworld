import React, { Component } from 'react';
import '@/style/kind.scss';
import { NavLink } from 'react-router-dom';
import Kindlistsy from '@/components/kind/Kindlistsy';
import api from '@/api/kind/index';

class Com extends Component {

  constructor(props) {
    super (props);
    this.state = {
      kindlistsy: []
    }
  }

  componentDidMount () {
    console.log(this);
    api.requestData4().then(data => {
      console.log(data)
      // console.log(data)
      this.setState({
        kindlistsy: data
      })
    })
  }


  render () {
    return (
      <div className = "box1">
        <div className="header1">
            <NavLink to = { '/' } className = "backe">
              <img src="//js.ibaotu.com/mobile/img/icons/main/icon_back_hui.png" alt=""/>
              {/* <i className="pb-icon icon-search"></i> */}
            </NavLink>
            <div className="btn-wrap">
              <NavLink to ="/search" className="home-search but-search ">
              <i className="iconfont icon-sousuo"></i>
              <input type="text" className="search"/>
              </NavLink>
            </div>
        </div>
        <div className = "content1">
          <div className = "sorts-wrap">
            <ul className = "sorts-list clearfix">
              <NavLink to = "/kindtaobao">
                <p>电商淘宝</p>
              </NavLink>
              <NavLink to = "/kindppt">
                <p>PPT模板</p>
              </NavLink>
              <NavLink to = "/kindexcel" >
                <p>Excel模板</p>
              </NavLink>
              <NavLink to = "/kindword">
                <p>Word模板</p>
              </NavLink>
              <NavLink to = "/kindsheying"  className="te">
                <p>摄影图</p>
              </NavLink>
              <NavLink to = "/kindyinxiao">
                <p>音效</p>
              </NavLink>
              <NavLink to = "/kindpeiyue">
                <p>配乐</p>
              </NavLink>
              <NavLink to = "/kindchahua">
                <p>插画</p>
              </NavLink>
            </ul>
          </div>        
          <div className="ggo">
            <div className = "banner" ></div>
            <div className ="picturelist">
              <Kindlistsy kindlistsy = { this.state.kindlistsy }/>
            </div>
          </div>         
        </div>
      </div>     
    )
  }
}

export default Com