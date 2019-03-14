import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';

const Kindlistword = ({ kindlistword }) => (
  <ul className="kindd">
    {
      kindlistword.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/worddetail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlistword.propTypes = {
  Kindlistword: PropTypes.array
}

export default Kindlistword
