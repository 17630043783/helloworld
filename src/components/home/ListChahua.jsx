import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

  const ListChahua =({ chahuadata}) => {
    console.log (chahuadata);
    return (
      <div className="home-cot">
        <div>
        <div className="moudle-tit">
            <h3>插画配图</h3>
            <Link to="/kindchahua">
            查看更多
            <i className="iconfont icon-you"></i>
            </Link>
          </div>
        <ul className="movielist">
           {
             chahuadata.map((item) => {
                return (
                 <Link to = { '/detailapp/chdetail/' + item.number } key = { item.number }>
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
export default ListChahua;
