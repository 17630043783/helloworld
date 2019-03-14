const reducer = (state = {
  list: [],
  bannerdata: [],
  dianshangdata: [],
  qiyedata: [],
  chahuadata: [],
  sheyingdata: []
}, action) => {
  const { type, data } = action; // type表示你要做的事行为，data就是传递过来的数据
  switch (type) {
    // 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
    case 'CHANGE_BANNER_DATA':
      // state.bannerdata = data
      // return state
      return {
        list: state.list,
        bannerdata: data,
        dianshangdata: state.dianshangdata,
        qiyedata: state.qiyedata,
        chahuadata: state.chahuadata,
        sheyingdata: state.sheyingdata
      }
    case 'CHANGE_LIST_DATA':
      return {
        list: data,
        bannerdata: state.bannerdata,
        dianshangdata: state.dianshangdata,
        qiyedata: state.qiyedata,
        chahuadata: state.chahuadata,
        sheyingdata: state.sheyingdata
      }
      case 'CHANGE_DIANSHANG_DATA':
      return {
        list: state.list,
        bannerdata: state.bannerdata,
        dianshangdata: data,
        qiyedata: state.qiyedata,
        chahuadata: state.chahuadata,
        sheyingdata: state.sheyingdata
      }
      case 'CHANGE_QIYE_DATA':
      return {
        list: state.list,
        bannerdata: state.bannerdata,
        dianshangdata:state.dianshangdata,
        qiyedata: data,
        chahuadata: state.chahuadata,
        sheyingdata: state.sheyingdata
      }
      case 'CHANGE_CHAHUA_DATA':
      return {
        list: state.list,
        bannerdata: state.bannerdata,
        dianshangdata:state.dianshangdata,
        qiyedata: state.qiyedata,
        chahuadata: data,
        sheyingdata: state.sheyingdata
      }
      case 'CHANGE_SHEYING_DATA':
      return {
        list: state.list,
        bannerdata: state.bannerdata,
        dianshangdata:state.dianshangdata,
        qiyedata: state.qiyedata,
        chahuadata: state.chahuadata,
        sheyingdata: data
      }
    default:
      return state;
  }
}
export default reducer;