import React from 'react'
import { useState, useEffect, useContext } from 'react'

import {signin} from '../../api'
import { Button, TextField } from '@material-ui/core'
import { prototype } from 'stream'
import { useHistory } from 'react-router'

import { UserDataContext } from '../Main'

type Props = {
  onLogined: (username: string, token: string)=>void
}

const LoginView = (props: Props) => {
  const history = useHistory()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onClickedLogin = async () => {
    const res = await signin(username, password)
    console.log('Response: ', res)
    props.onLogined(username, res.data.token)
    history.replace('/list')
  }

  return (
    <div>
      <div>
        <p>Login</p>
      </div>
      <div>
        <TextField placeholder={'user name'} onChange={(elem)=>{setUsername(elem.target.value)}} />
      </div>
      <p>Test username: test@example.com</p>
      <div>
        <TextField placeholder={'password'} onChange={(elem) => {setPassword(elem.target.value)}} />
      </div>
      <p>Test password: test</p>

      <Button variant={'contained'} onClick={onClickedLogin}>Login</Button>
    </div>
  )
}

export default LoginView
