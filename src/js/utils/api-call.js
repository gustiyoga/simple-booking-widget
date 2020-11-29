import axios from 'axios'
import { API_KEY, API_HOST } from 'constants/api'

export const apiCall = ({ method, path, params }) => {
  const requestOptions = {
    method,
    url: `${API_HOST}${path}`,
    headers: { apiKey: API_KEY },
    json: true,
    params
  }

  return axios(requestOptions)
    .then(res => res)
    .catch(e => e.response)
}
