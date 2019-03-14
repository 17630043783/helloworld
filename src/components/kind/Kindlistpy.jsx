import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';

const Kindlistpy = ({ kindlistpy }) => (
  <ul className="kindd">
    {
      kindlistpy.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/pydetail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlistpy.propTypes = {
  Kindlistpy: PropTypes.array
}

export default Kindlistpy
