import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';

const Kindlistexcel = ({ kindlistexcel }) => (
  <ul className="kindd">
    {
      kindlistexcel.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/exceldetail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlistexcel.propTypes = {
  Kindlistexcel: PropTypes.array
}

export default Kindlistexcel
