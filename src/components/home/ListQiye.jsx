import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

  const ListQiye =({ qiyedata}) => {
    console.log (qiyedata);
    return (
      <div className="home-cot">
        <div>
        <div className="moudle-tit">
            <h3>企业办公</h3>
            <Link to="/kindppt">
            查看更多
            <i className="iconfont icon-you"></i>
            </Link>
          </div>
        <ul className="movielist">
           {
             qiyedata.map((item) => {
                return (
                 <Link to = { '/detailapp/qydetail/' + item.number } key = { item.number }>
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
export default ListQiye;
