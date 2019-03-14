import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

  const ListSheying =({ sheyingdata}) => {
    console.log (sheyingdata);
    return (
      <div className="home-cot">
        <div>
        <div className="moudle-tit">
            <h3>摄影素材</h3>
            <Link to="/kindsheying">
            查看更多
            <i className="iconfont icon-you"></i>
            </Link>
          </div>
        <ul className="movielist">
           {
             sheyingdata.map((item) => {
                return (
                 <Link to = { '/detailapp/sydetail/' + item.number } key = { item.number }>
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
      </div>
    )
  }
export default ListSheying;
