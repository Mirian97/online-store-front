import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_API_JSON,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
