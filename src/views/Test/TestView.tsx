import React from 'react'

import { testRequest, signin } from '../../api'
const TestView = () => {

  const onTestPressed = () => {
    testRequest().then((res) => {
      console.log(res)
    })
  }

  const onLoginPressed = () => {
    signin().then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <button onClick={onTestPressed}>test</button>
      <button onClick={onLoginPressed}>login</button>
    </div>
  )
}

export default TestView
