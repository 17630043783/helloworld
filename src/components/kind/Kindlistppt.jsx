import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';

const Kindlistppt = ({ kindlistppt }) => (
  <ul className="kindd">
    {
      kindlistppt.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/qydetail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlistppt.propTypes = {
  Kindlistppt: PropTypes.array
}

export default Kindlistppt
