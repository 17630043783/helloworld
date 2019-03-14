import axios from 'axios';
import url from '@/api/index';

const api = {
  requestData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/taobao/search?imgname=三八女神节')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(0,4)
        console.log(arrlist);
        resolve(arrlist)
        // resolve(data.data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestBanner () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/swiper')
      .then( data => {
        console.log(data.data.data);
        resolve(data.data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestTaobaoData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/taobao/search?imgname=电商淘宝')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(0,4)
        console.log(arrlist);
        resolve(arrlist)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestQiyeData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/ppt/search?imgname=公司')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(0,4)
        console.log(arrlist);
        resolve(arrlist)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestChahuaData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/chahua/search?imgname=唯美')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(0,4)
        console.log(arrlist);
        resolve(arrlist)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestSheyingData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/sheying/search?imgname=蓝色')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(0,4)
        console.log(arrlist);
        resolve(arrlist)
      })
      .catch (err => {
        reject(err)
      })
    })
  }
}
export default api;