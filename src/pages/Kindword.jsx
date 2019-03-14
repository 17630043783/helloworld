import React, { Component } from 'react';
import '@/style/kind.scss';
import { NavLink } from 'react-router-dom';
import Kindlistword from '@/components/kind/Kindlistword';
import api from '@/api/kind/index';

class Com extends Component {

  constructor(props) {
    super (props);
    this.state = {
      kindlistword: []
    }
  }

  componentDidMount () {
    console.log(this);
    api.requestData().then(data => {
      console.log(data)
      // console.log(data)
      this.setState({
        kindlistword: data
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
              <NavLink to = "/kindword" className="te">
                <p>Word模板</p>
              </NavLink>
              <NavLink to = "/kindsheying">
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
              <Kindlistword kindlistword = { this.state.kindlistword }/>
            </div>
          </div>         
        </div>
      </div>     
    )
  }
}

export default Com