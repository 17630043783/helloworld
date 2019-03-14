import axios from 'axios';
import url from '@/api';

const api = {
  requestData (type) {
    console.log(url.baseUrl + '/api/'+ type)
    return new Promise((resolve, reject) => {
      axios.get( url.baseUrl + '/api/'+ type )
        .then(data => {
          console.log(data.data.data)
          var arr = data.data.data;
          var arrlist = arr.slice(20, 40)
          // console.log(arrlist);
          resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestSearchData (type) {
    // console.log(type)
    return new Promise((resolve, reject) => {
      axios.get( url.baseUrl + '/api/'+ type )
        .then(data => {
          // console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestClickData (type) {
    return new Promise((resolve, reject) => {
      axios.get( url.baseUrl + '/api/'+ type )
        .then(data => {
          // console.log(data.data.data)
          var arr = data.data.data;
          var arrlist = arr.slice(60, 88)
          // console.log(arrlist);
          resolve(arrlist)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestListData (type) {
    return new Promise((resolve, reject) => {
      axios.get( url.baseUrl + '/api/'+ type )
        .then(data => {
          // console.log(data.data.data)
          var arr = data.data.data;
          var arrlist = arr.slice(42, 60)
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