import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';

const Kindlistch = ({ kindlistch }) => (
  <ul className="kindd">
    {
      kindlistch.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/chdetail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlistch.propTypes = {
  Kindlistch: PropTypes.array
}

export default Kindlistch
