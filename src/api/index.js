import axios from 'axios'

import ApiURL from './apiurl'
const KEY = 'AIzaSyCL3YvNuj5D5GVofTJxt1h-Bz5aIJSI1Iw'

const api = axios.create({
  // baseURL: 'https://localhost:8000'
  baseURL: ApiURL.host
})

const params ={
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

export const signin = async (user_id, password) => {
  return await api.post(ApiURL.singin, {
    userMail: "test@example.com",
    userPassword: "test"
  })
}

export const testRequest = async () => {
  return await api.get(ApiURL.test)
}

// トークンテストAPI
// headersにJWTのトークンを設定して呼び出す。
export const tokenTestRequest = async (token) => {
  return await api.get(ApiURL.tokenTest, {
    headers: {"Authorization": `Bearer ${token}`}
  });
}

export const fetchSelectedData = async (id) => {
  return await api.get('/videos', {
    params: {
      ...params,
      id
    }
  })
}

export const fetchRelatedData = async (id) => {
  return await api.get('/search', {
    params: {
      ...params,
      relatedToVideoId: id
    }
  })
}

export const fetchSearchData = async (query) => {
  return await api.get('/search', {
    params: {
      ...params,
      q: query
    }
  })
}