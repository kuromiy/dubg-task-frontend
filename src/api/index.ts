import axios from 'axios'

import ApiURL from './apiurl'

const api = axios.create({
  // baseURL: 'https://localhost:8000'
  baseURL: ApiURL.host,
  timeout: 2000,
})

api.interceptors.request.use((config)=>{
  console.log('intercept')
  let token = undefined
  console.log(document.cookie)
  if (token = document.cookie.split(';').find((row) => row.startsWith('token'))?.split('=')[1]) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  config.headers['X_TEST_HEADER'] = 'Test header value'
  return config
})

export default api

export const signin = async (userId: string, password: string) => {
  // config.headers['Authorization'] = `Bearer ${token}`
  // テストログイン
  // "test@example.com"
  // "test"
  console.log(userId)
  console.log(password)
  return api.post(ApiURL.singin, {
    userMail: userId,
    userPassword: password
  }).then((res) => {
    document.cookie = `token=${res.data.token}; max-age=30000`
    return res
  })
}

// トークンテストAPI
// headersにJWTのトークンを設定して呼び出す。
export const tokenTestRequest = async (token: string) => {
  return await api.get(ApiURL.tokenTest, {
    headers: {"Authorization": `Bearer ${token}`}
  });
}
