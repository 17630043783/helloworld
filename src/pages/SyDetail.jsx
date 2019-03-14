import React,{ Component } from 'react';
import api from '@/api/detail';
import { Link } from "react-router-dom";
import '@/style/detail.scss';
import { ActionSheet,Toast, Modal } from 'antd-mobile';
import * as XLSX from 'xlsx';

const alert = Modal.alert;
var tmpDown;
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      imgname: '',
      imgurl:'',
      number:'',
      pixel:'',
      rgbmode:'',
      size: '',
      _format:'',
      software:'',
      list: [],
      shoucang: '收藏',
      datafav: 0,
      classname:"icon-float-col",
      href:'',
      dataexcel:''
    }
  }
  componentDidMount (){
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id
    console.log(this)
    api.requestSiyeData(id).then(data => {
      console.log(data);
      this.setState({
        imgname: data[0].imgname,
        imgurl: data[0].imgurl,
        number: data[0].number,
        pixel: data[0].pixel,
        rgbmode: data[0].rgbmode,
        size: data[0].size,
        _format: data[0]._format,
        software: data[0].software
      })
      })
     api.requestSyTuijianData().then(data => {
          console.log(data)
          this.setState({
            list: data
            // tjimg: data[0].imgurl,
            // tjnumber: data[0].number
          })
          console.log(this);
        })
    }
    dataList = [
      { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
      { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
      { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
      { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
      { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
    ].map(obj => ({
      icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
      title: obj.title,
    }));
    showShareActionSheet = () => {
      ActionSheet.showShareActionSheetWithOptions({
        options: this.dataList,
        // title: 'title',
        message: '',
      },
      (buttonIndex) => {
        this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
        // also support Promise
        return new Promise((resolve) => {
          setTimeout(resolve, 100);
        });
      });
    }
    onshoucang () {
     if(localStorage.getItem('isLogin') ==='ok'){
      console.log(this.state.datafav);
      if(this.state.datafav === 0 ) {
        this.setState({
        shoucang: "已收藏",
        classname: "icon-float-col-active",
        datafav: 1
      })
      let num = this.state.number;
      let img = this.state.imgurl;
      let name = this.state.imgname
      let sydata = {
        num: num,
        img: img,
        name: name
      }
      let data = JSON.parse(localStorage.getItem("sydata"))
      if (data === null) {
        data = [sydata]
      } else {
        let onoff = true
       for (let i in data) {
         if (this.state.number === data[i].num ) {
          onoff = false
         }
       }
      
        if (onoff === true) {
          data.push(sydata)
        }
      }
      localStorage.setItem('sydata', JSON.stringify(data))
      Toast.info('收藏成功', 1)
      } else {
        this.setState({
          shoucang: "收藏",
          classname: "icon-float-col",
          datafav: 0
        })
        let data = JSON.parse(localStorage.getItem("sydata"))
        console.log(data)
        data.map((item, index) => {
          if (item.num === this.state.number) {
            data.splice(index, 1)
          }
        })
        localStorage.setItem('sydata', JSON.stringify(data))
        Toast.info('取消成功', 2)
        localStorage.removeItem("numberdata");
      }
  }else {
      console.log(this)
      var a = this.props.history.push;
      var time= window.setTimeout(function(){
       a('/userapp/login')
      },1000)
      Toast.info('抱歉，您还没有登录!', 1)
    }
  }
  downloadExl = (json,type) =>{
    var tmpdata = json[0];
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdata) {
                keyMap.push(k);
                json[0][k] = k;
            }
          var tmpdata = [];//用来保存转换好的json 
                json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                    v: v[k],
                    position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                    v: v.v
                });
                var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
                var tmpWB = {
                    SheetNames: ['mySheet'], //保存的表标题
                    Sheets: {
                        'mySheet': Object.assign({},
                            tmpdata, //内容
                            {
                                '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                            })
                    }
                };
                tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB, 
                    {bookType: (type === undefined ? 'xlsx':type),bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
                    ))], {
                    type: ""
                }); //创建二进制对象写入转换好的字节流
    var href = URL.createObjectURL(tmpDown); //创建对象超链接
    this.state.href=href;
    setTimeout(function() { //延时释放
        URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
    }, 100);
}

s2ab=(s)=> { //字符串转字符流
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
 // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
getCharCol=(n)=> {
    let temCol = '',
    s = '',
    m = 0
    while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
} 
  render () {
    const {href} = this.state;
    console.log(this.state.number)
    let obj = [{ //测试数据
          "作品编号": this.state.number,
          "作品名称":  this.state.imgname,
          "作品链接":  this.state.imgurl,
          "颜色模式":this.state.rgbmode,
          "文件格式":this.state._format,
          "图片像素": this.state.pixel,
          "文件大小": this.state.size,
          "上传时间":'2019-2-15',
          "图片版权": "人物画像及字体仅供参考",
                }];
    return (
      <div className="box">
      <header className="detailheader">
        <Link to="/home" className="iconfont icon-icon"></Link>
        <h2>{ this.state.imgname }</h2>
        <Link to="/search" className="iconfont icon-weibiaoti--"></Link>
        <p to="/" className="iconfont icon-zhuanfa" onClick={this.showShareActionSheet}></p>
      </header>
      <div className = "content">
          <div>
            <div className="imgs-wrap">
              <p className="imgs-yuanchuang"></p>
              <img src={ this.state.imgurl }  alt=""/>
              <img src={ this.state.imgurl }  alt=""/>
            </div>
            <div className="pro-infos">
                <div className="pro-tit">
                    <p>{ this.state.imgname }</p>
                </div>
                <div className="business-wrap">
                  <Link to="" className="pb-icon icon-banquan"><span>包图原创正版素材</span></Link>
                  <Link to="" className="pb-icon icon-business"><span>可授权商用</span></Link>
                </div>
                <div className="infos">
                  <h6>作品详情：</h6>
                  <div className="item">
                    <div>
                      <span>文件格式</span>
                      <span>{ this.state._format}</span>
                    </div>
                    <div>
                      <span>颜色模式</span>
                      <span>{this.state.rgbmode}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <span>图片像素</span>
                      <span>{ this.state.pixel}</span>
                    </div>
                    <div>
                      <span>文件大小</span>
                      <span>{this.state.size}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <span>上传时间</span>
                      <span>2019-2-15</span>
                    </div>
                    <div>
                      <span>作品编号</span>
                      <span>{ this.state.number}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <span>图片版权</span>
                      <span>人物画像及字体仅供参考</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="relate-recom">
            <h6>相关推荐</h6>
            <ul className="tjimg">
            {
             this.state.list.map((item) => {
              //  console.log(item)
                return (
                 <Link to = { '/detail/' + item.number } key = { item.number }>
                   <div className="movieimg">
                      <img src={ item.imgurl } alt=""/>
                   </div>
                 </Link>
               )
              })
            }
         </ul>
          </div>
          <Link to="" className="float-right-up"></Link>
      </div>
      <footer className="footer">
        <div className="float-col">
            <div className="sec-float-left">
              <Link to="/home" className="navi-item">
                <i className="pb-icon navi_home"></i>
                <p>首页</p>
              </Link>
              <div  className="col-wrap col-wraps">
              <i className={ this.state.classname } onClick = { this.onshoucang.bind(this)}></i>
                <p className="is_fav" data-fav={ this.state.datafav }>{ this.state.shoucang }</p>
              </div>
            </div>
            <div className="sec-float-right clearfix">
            <div className="ri-download">
              <div>
                <a href={href} download={'demo.xlsx'}>免费下载</a>
                <button onClick={this.downloadExl(obj)}></button> 
              </div>
            </div>
              <p className="ri-open open-vip"
                 onClick={ () =>
                  alert('', '开通VIP，即可下载海量素材', [
                    { text: '取消', onPress: () => console.log('cancel') },
                    {
                      text: '开通VIP',
                      onPress: () =>
                        new Promise((resolve) => {
                          // setTimeout(resolve, 1000);
                        }),
                    },
                  ])
                }
              >开通VIP</p>
            </div>
        </div>
      </footer>
      </div>
    )
  }

}

export default Com
