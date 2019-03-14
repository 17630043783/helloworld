import axios from 'axios';
import url from '@/api/index';

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/word')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestData1 () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/execl')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestData2 () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/taobao')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestData3 () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/ppt')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestData4 () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/sheying')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  }, 
   requestdetailData4 (id) {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/sheying/detail?number='+id)
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestData5 () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/yinxiao')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestData6 () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/peiyue')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestData7 () {
    return new Promise((resolve, reject) => {
      axios.get(url.baseUrl + '/api/chahua')
        .then(data => {
          // console.log(data)
        var arr = data.data.data;
        var arrlist=arr.slice(0,32)
        console.log(arrlist);
        resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
