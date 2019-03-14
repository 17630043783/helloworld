import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

  const ListDianshang =({ dianshangdata}) => {
    console.log (dianshangdata);
    return (
      <div className="home-cot">
        {/* <div>
          <div className="moudle-tit">
            <h3>广告设计</h3>
            <Link to="">
            查看更多
            <i className="iconfont icon-you"></i>
            </Link>
          </div>
        <ul className="movielist">
           {
             list.map((item) => {
                return (
                 <Link to = { '/detail/' + item.number } key = { item.number }>
                   <div className="movieimg">
                      <img src={ item.imgurl } alt=""/>
                        <p>{ item.imgname }</p>
                   </div>
                 </Link>
               )
              })
            }
         </ul>
        </div> */}
        <div>
        <div className="moudle-tit">
            <h3>电商淘宝</h3>
            <Link to="/kindexcel">
            查看更多
            <i className="iconfont icon-you"></i>
            </Link>
          </div>
        <ul className="movielist">
           {
             dianshangdata.map((item) => {
                return (
                 <Link to = { '/detailapp/detail/' + item.number } key = { item.number }>
                   <div className="movieimg">
                      <img src={ item.imgurl } alt=""/>
                        <p>{ item.imgname }</p>
                   </div>
                 </Link>
               )
              })
            }
         </ul>
        </div>
        {/* <div>
        <div className="moudle-tit">
            <h3>视频素材</h3>
            <Link to="">
            查看更多
            <i className="iconfont icon-you"></i>
            </Link>
          </div>
        <ul className="movielist">
           {
             list.map((item) => {
                return (
                 <Link to = { '/detail/' + item.p_id } key = { item.p_id }>
                   <div className="movieimg">
                      <img src={ item.p_pic } alt=""/>
                        <p>{ item.p_name }</p>
                   </div>
                 </Link>
               )
              })
            }
         </ul>
        </div> */}
      </div>
    )
  }
export default ListDianshang;
