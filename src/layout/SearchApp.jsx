import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import Searchpage from '@/pages/Searchpage';
import Searchkind from '@/pages/Searchkind';
import '@/style/search'

class App extends Component {

constructor (props) {
  super (props);
  this.state = {
    keyword: '',
    data: []
  }
}

  gokind(e) {
    this.setState({
      keyword: e.target.value
    })
    
  }

  handleSubmit() {
    this.props.history.push('/search/searchkind?value=' + this.state.keyword)
  }
  render () {
    return (
      <div className = "box">
				{/* <div className="header search">
          <div className="header-search-wrap">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <a href="" className="btn-wrap but-search" id="search-btn">
                  <i className="pb-icon icon-search"></i>
                </a>
                <input type="search" defaultValue = {this.state.keyword} id="so-kw" className="header-search-inp search" onChange={this.gokind.bind(this)} placeholder = "请输入关键字"/>
                <i className="pb-icon icon-delete"></i>
            </form>
          </div>
          <i className="pb-icon icon-back-h search-disap"></i>
        </div> */}
        <div className="sheader">
          <div className="srect">
              <form onSubmit={this.handleSubmit.bind(this)}>
                    <a href="" className="btn-wrap but-search" id="search-btn">
                      <i className="pb-icon icon-search"></i>
                    </a>
                    <input type="search" defaultValue = {this.state.keyword} id="so-kw" className="header-search-inp search" onChange={this.gokind.bind(this)} placeholder = "请输入关键字"/>
                    <Link to="/home" className="iconfont icon-icon"></Link>
                </form>
          </div>
        </div>
        <div className="search-box" style={{ marginTop:"0.1rem"}}>
          <Switch>
            <Route path="/search/searchkind" component = { Searchkind } />
            <Route path="/search" component = { Searchpage } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
