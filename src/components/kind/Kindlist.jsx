import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@/style/kindlist.scss';
// import ReactDOM from 'react-dom'

const Kindlist = ({ kindlist }) => (
  <ul className="kindd">
    {
      kindlist.map((item, index) => {
        return (
          <NavLink to = { '/detailapp/detail/' + item.number } key = { item.number }>
          <img src = { item.imgurl } alt=""/>
          <p>{ item.imgname }</p>
          </NavLink>
        )
      })
    }
  </ul>
)

Kindlist.propTypes = {
  Kindlist: PropTypes.array
}

export default Kindlist
