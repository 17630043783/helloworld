import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@/style/searchpage.scss';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      oli: ['妇女节' , '淘宝', '音效', 'PPT', '背景', '商务', '摄影', '财务报表']
    }
  }
  
  render () {
    return ( 
      <div className="spage">
        <h2>搜索热词</h2>
          <ul className="slist">  
          {    
            this.state.oli.map((item, index) => {
              return (
                <Link to= {"/search/searchkind/index=" + (index+1)} key = { index }>
                  { item }
                </Link>
              )
            })
          }  
        </ul>
      </div>      
    )
  }
}

export default Com
