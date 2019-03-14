import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import '@/style/shoucang.scss';


class Com extends Component {
  constructor(props) {
    super(props)
      this.state = {
           data: [],
           list: [],
           syarr: [],
           charr: []
         }
  }
 componentDidMount () {
    console.log(this.props);
    var data = JSON.parse(localStorage.getItem("numberdata"))
   console.log(data)
    this.setState({
      data: data
    })
       var arrdata = JSON.parse(localStorage.getItem("arrData"))
         this.setState({
           list: arrdata
         })

         var sydata = JSON.parse(localStorage.getItem('sydata'))
         this.setState({
           syarr: sydata
         })

         var chdata = JSON.parse(localStorage.getItem("chdata"))
         this.setState({
           charr: chdata
         })

  }
  render () {
    var data = JSON.parse(localStorage.getItem("numberdata"))
    var arrData = JSON.parse(localStorage.getItem("arrData"))
    var sydata = JSON.parse(localStorage.getItem("sydata"))
    var chdata = JSON.parse(localStorage.getItem("chdata"))
    if (!data && !arrData && !sydata && !chdata) {
      return(
        <div className="box">
          <header className="shoucangheader">
         <Link to="/user" className="iconfont icon-icon"></Link>
          <h2>我的收藏</h2>
          </header>
          <div className = "content">
          <div>
            <img src="http://js.ibaotu.com/mobile/img/icons/user/user_background.png
" alt="" className = 'xiaoxiong '/>
            <p className = 'sc'>您还没有收藏，里面空空如也......</p>
            <NavLink to= '/' className = "shopp">去购买您需要的商品</NavLink> 
          </div>
          </div>
       </div>
      )
    } else {
      return (
        <div className="box">
          <header className="shoucangheader">
          <Link to="/user" className="iconfont icon-icon"></Link>
          <h2>我的收藏</h2>
         </header>
          <div className = "content">
            <div>
           <ul className="movielist">
             {
             this.state.data && this.state.data.map((item) => {
                 return (
                   <Link to = { '/detailapp/detail/' + item.number } key = { item.number }>
                     <div className="movieimg">
                        <img src={ item.img } alt=""/>
                          <p>{ item.name }</p>
                     </div>
                   </Link>  
                 )
                })
              }
{
 this.state.list && this.state.list.map((item) => {
   console.log(item)
     return (
      <Link to = { '/detailapp/qydetail/' + item.num } key = { item.num }>
        <div className="movieimg">
           <img src={ item.img } alt=""/>
             <p>{ item.title }</p>
        </div>
      </Link>  
    )
   })
 }
 {
   this.state.syarr && this.state.syarr.map((item) => {
     console.log(item)
       return (
       <Link to = { '/detailapp/sydetail/' + item.num } key = { item.num }>
         <div className="movieimg">
           <img src={ item.img } alt=""/>
             <p>{ item.name }</p>
         </div>
       </Link>  
     )
     })
   }
   {
     this.state.charr && this.state.charr.map((item, index) => {
       return (
         <Link to = {'/detailapp/chdetail/' + item.num} key = { item.num }>
           <div className = "movieimg">
             <img src= { item.img } alt=""/>
             <p>{item.name}</p>
           </div>
         </Link>
       )
     })
   }
 </ul>
   </div>
 </div>
</div>
      )
    }
  
  }
}

export default Com
