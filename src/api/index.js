let baseUrl = '/daxun'
process.env.NODE_ENV === 'development' ? baseUrl = '/daxun' : baseUrl = 'http://39.96.193.22'
let baseUrlapi = '/api'
process.env.NODE_ENV === 'development' ? baseUrlapi = '/api' : baseUrlapi = 'http://bixby.red'
export default {baseUrl,baseUrlapi}