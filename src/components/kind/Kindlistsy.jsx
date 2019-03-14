import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';

const Kindlistsy = ({ kindlistsy }) => (
  <ul className="kindd">
    {
      kindlistsy.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/sydetail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlistsy.propTypes = {
  Kindlistch: PropTypes.array
}

export default Kindlistsy
