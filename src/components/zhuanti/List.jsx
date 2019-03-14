import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = ({ list }) => (
  <ul className="pros-list clearfix">
    {
      list.map((item, index) => {
        return (
          <li key = { index } className = "liss">
              <img src={ item.imgurl }  alt=""/>
                <p className="pro">{ item.imgname }</p>     
          </li>
        )
      })
    }
  </ul>
)
List.propTypes = {
  list: PropTypes.array
}
export default List
