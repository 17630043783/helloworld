import axios from 'axios';
import url from '@/api';

const api = {
  requestData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/taobao/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
   requesteExcelData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/execl/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
   requesteWordData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/word/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requesteYxData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/yinxiao/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestePyData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/peiyue/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestTuijianData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/taobao/search?imgname=女神')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(6,12)
        console.log(arrlist);
        resolve(arrlist)
        // resolve(data.data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestQiyeData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/ppt/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestQyTuijianData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/ppt/search?imgname=公司')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(6,12)
        console.log(arrlist);
        resolve(arrlist)
        // resolve(data.data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestSiyeData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/sheying/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestSyTuijianData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/sheying/search?imgname=蓝色')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(6,12)
        console.log(arrlist);
        resolve(arrlist)
        // resolve(data.data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestChData (id) { 
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl + '/api/chahua/detail?number=' + id)
      .then( data => {
        console.log(data);
        resolve(data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
  requestChTuijianData () {
    return new Promise ((resolve, reject) => {
      axios.get(url.baseUrl  + '/api/chahua/search?imgname=唯美')
      .then( data => {
        console.log(data.data);
        var arr = data.data.data;
          var arrlist=arr.slice(8,14)
        console.log(arrlist);
        resolve(arrlist)
        // resolve(data.data.data)
      })
      .catch (err => {
        reject(err)
      })
    })
  },
}
export default api;