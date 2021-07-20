import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://perfanalytics-api-ht.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axios
