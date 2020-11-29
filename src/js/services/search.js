import { apiCall } from 'utils/api-call'

export const searchProduct = ({ q, cat, lat, lng, rad }) => {
  const requestOptions = {
    method: 'GET',
    path: '/Search',
    params: {
      q,
      cat,
      lat,
      lng,
      rad
    }
  }

  return apiCall(requestOptions)
}
