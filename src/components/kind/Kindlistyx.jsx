import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';

const Kindlistyx = ({ kindlistyx }) => (
  <ul className="kindd">
    {
      kindlistyx.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/yxdetail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlistyx.propTypes = {
  Kindlistyx: PropTypes.array
}

export default Kindlistyx
