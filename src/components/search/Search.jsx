import React from 'react';
import PropTypes from 'prop-types';
import './searchlist.scss';
import { Link } from 'react-router-dom';

const Search = ({ search }) => (
  <ul className="movelist">
    {
      search.map((item, index) => {
        return (
          <Link to = { '/detailapp/detail/' + item.number } key = { index }>
          <div className="movieimg">
             <img src={ item.imgurl } alt=""/>
               <p>{ item.imgname }</p>
          </div>
        </Link>
        )
      })
    }
  </ul>
)

Search.propTypes = {
  list: PropTypes.array
}

export default Search
