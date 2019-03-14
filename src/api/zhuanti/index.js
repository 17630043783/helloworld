import axios from 'axios';
import url from '@/api'

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get( url.baseUrl + '/api/sheying' )
        .then(data => {
          // console.log(data.data.data)
          var arr = data.data.data;
          var arrlist = arr.slice(20, 36)
          // console.log(arrlist);
          resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestKind (index) {
    let type=''
    if (index === 0) {
      type = '/api/taobao'
    } else if (index === 1) {
      type = '/api/sheying'
    } else if (index === 2) {
      type = '/api/ppt'
    } else if (index === 3) {
      type = '/api/chahua'
    } else if (index === 4) {
      type = '/api/peiyue'
    } else if (index === 5) {
      type = '/api/yinxiao'
    } else {
      type = '/api/word'
    } 
    return new Promise((resolve, reject) => {
      axios.get( url.baseUrl + type )
        .then(data => {
          // console.log(data.data.data)
          var arr = data.data.data;
          var arrlist = arr.slice(100, 116)
          // console.log(arrlist);
          resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
