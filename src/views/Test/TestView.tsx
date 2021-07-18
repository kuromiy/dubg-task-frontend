import React, { useState } from 'react'

import {signin, tokenTestRequest } from '../../api'

const TestView = () => {
  const [token, setToken] = useState("");

  const onLoginPressed = () => {
    signin("test@example.com", "test").then((res) => {
      console.log(res)

      // JWTのトークン設定
      setToken(res.data.token)
    })
  }

  // JWTのトークンを指定してトークンテストAPIを呼び出す。
  // 認証成功なら{message: "認証成功"}が帰ってくる。
  const onTokenConfirm = () => {
    tokenTestRequest(token).then(res => {
      console.log(res)
    });
  };

  return (
    <div>
      <button onClick={onLoginPressed}>login</button>
      <button onClick={onTokenConfirm}>トークン確認</button>
      <span>Token: {token}</span>
    </div>
  )
}

export default TestView
