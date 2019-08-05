import axios from 'axios'

const api = axios.create({
  baseURL: 'http://private-anon-4a1bb9fc64-tradersclubapi.apiary-proxy.com/api/'
})

export default api