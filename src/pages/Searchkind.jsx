import React, { Component } from 'react';
import api from '@/api/search';
import Search from '@/components/search/Search';
import '@/style/searchkind.scss'

class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      search: [],
      link: [ '全部', '电商淘宝', 'ppt模板', 'Word模板', 'Execl模板', '音效', '插画', '配乐', '摄影图' ],
      shaixuan: [ '全部', 'PPT', 'Word', 'Execl'],
      classname: 'active',
      type: '',
      num: -1,
      numinput: '',
      keyword: '',
      index:true,
      tab:0,
      isSelect: 0,
      zonghe: [ '今日热图', '昨日热图', '最新上传', '热门下载' ],
      nowsearch: ''
    }
  }
  
  componentDidMount () {
    let type = '';
    const num = this.props.location.pathname.slice(25)*1
    if(num !== 0) {
      switch (num) {
        case 1: type = 'taobao/search?imgname=妇女节';break;
        case 2: type = 'taobao/search?imgname=淘宝';break;
        case 3: type = 'yinxiao/search?imgname=音效';break;
        case 4: type = 'ppt/search?imgname=ppt';break;
        case 5: type = 'peiyue/search?imgname=背景';break;
        case 6: type = 'word/search?imgname=商务';break;
        case 7: type = 'sheying/search?imgname=摄影';break;
        case 8: type = 'execl/search?imgname=财务报表';break;
      }
      api.requestData(type).then(data => {
        this.setState({
          search: data
        })
      })
    } 
    const keyword = this.props.location.search.slice(7)
    if (keyword !== '') {
      // console.log(keyword)
      api.requestSearchData('/search/searchinput?imgname=' + keyword).then(data => {
        this.setState({
          search: data
        })
      })
    }
    // api.requestClickData('/sheying?imgname=摄影').then(data => {
    //   this.setState({
    //     search: data
    //   })
    // })    
  }
  componentWillReceiveProps(nextprops){
    const keyword = nextprops.location.search.slice(7)
    if(this.state.nowsearch !== keyword) {
      if (keyword !== '') {
        // console.log(keyword)
        api.requestSearchData('/search/searchinput?imgname=' + keyword).then(data => {
          this.setState({
            search: data,
            nowsearch: keyword
          })
        })
      }
    } 
  }


  changeColor0(index){
    let type = '';
    const str = index+1; 
      switch (str) {
        case 1: type = 'search';break;
        case 2: type = 'taobao';break;
        case 3: type = 'ppt';break;
        case 4: type = 'word';break;
        case 5: type = 'execl';break;
        case 6: type = 'yinxiao';break;
        case 7: type = 'chahua';break;
        case 8: type = 'peiyue';break;
        default: type = 'sheying';break;
      }
      api.requestListData(type).then(data => {
        this.setState({
          search: data
        })
      })
    this.setState({
      tab:index,
      num: -1
    })
  }

  changeColor1 (index) {
    let type = '';
    const str = index + 1; 
      switch (str) {
        case 1: type = 'sheying';break;
        case 2: type = 'yinxiao';break;
        case 3: type = 'chahua';break;
        case 4: type = 'search';break;
      }
      api.requestListData(type).then(data => {
        this.setState({
          search: data
        })
      })
    this.setState({
      tab:index,
      num: -1
    })
  }

  changeColor2 (index) {
    let type = '';
    const str = index + 1; 
      switch (str) {
        case 1: type = 'search';break;
        case 2: type = 'ppt';break;
        case 3: type = 'word';break;
        case 4: type = 'execl';break;
      }
      api.requestListData(type).then(data => {
        this.setState({
          search: data
        })
      })
    this.setState({
      tab:index,
      num: -1
    })
  }

change0 = () => {
  let index = 0;
  if(this.state.num === index) {
    this.setState({
      num: -1  
    }) 
  }else {
    this.setState({
      num: index  
    }) 
  }
  }

  change1 = () => {
    let index = 1;
    if(this.state.num === index) {
      this.setState({
        num: -1  
      }) 
    }else {
      this.setState({
        num: index  
      }) 
    }
   }

   change2 = () => {
    let index = 2;
    if(this.state.num === index) {
      this.setState({
        num: -1  
      }) 
    }else {
      this.setState({
        num: index  
      }) 
    }
   } 
  

  searchClick () {
    console.log(this)
    // this.props.history.push('/search/searchkind?value=' + this.state.keyword)
  }

  getdata(data) {
    this.setState({
      search: data
    })
  }

  render () {    
    return (
    <div>
      <div className="skind">
        <div className="kind1">
          <div className="kindtop">
            <span onClick={this.change0}>分类</span>
          </div>
          <div className={['kinddiv', this.state.num === 0 ? this.state.classname : ''].join(" ")}>
            <ul className="kindul">
               { 
                this.state.link.map((item, index) => {
                  return (
                    <li key = { index } >
                      <a onClick={this.changeColor0.bind(this,index)} 
                      className={this.state.tab === index ? "active" : '' }>
                        { item }
                      </a>
                    </li>
                  )
                })
              }  
            </ul>
          </div>
        </div>
        <div className=" kind1 ">
          <div className="kindtop">
            <span onClick={this.change1}>最新图片</span>
          </div>
          <div className={['kinddiv', this.state.num === 1 ? this.state.classname : ''].join(" ")}>
            <ul className="kindul" >
            { 
                this.state.zonghe.map((item, index) => {
                  return (
                    <li key = { index } >
                      <a onClick={this.changeColor1.bind(this, index)} 
                      className={this.state.tab === index ? "active" : '' }>
                        { item }
                      </a>
                    </li>
                  )
                })
              }  
            </ul>
          </div>
        </div>
        <div className="kind1">
          <div className="kindtop">
            <span onClick={this.change2}>筛选</span>
            <i className="pb-icon icon-filter"></i>
          </div>
          <div className={['kinddiv', this.state.num === 2 ? this.state.classname : ''].join(" ")}>
            <ul className="kindul" >
              { 
                this.state.shaixuan.map((item, index) => {
                  return (
                    <li key = { index } >
                      <a onClick={this.changeColor2.bind(this, index)} 
                      className={this.state.tab === index ? "active" : '' }>
                        { item }
                      </a>
                    </li>
                  )
                })
              }  
            </ul>
          </div>
        </div>   
      </div>
      <div className="pros-list-wrap" style={{ overflow:"hidden"}}>
        <Search search = { this.state.search }/>
      </div> 
    </div>  
    )
  }
}

export default Com
