import React from 'react'
import { useState, useEffect, useContext } from 'react'

import {signin} from '../../api'
import { Box, Button, TextField } from '@material-ui/core'
import { prototype } from 'stream'
import { useHistory } from 'react-router'

import { UserDataContext } from '../Main'
import Style from './LoginView.module.scss'
import Header from '../../components/Header/Header'
import BaseLayout from '../../layouts/BaseLayout'

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
    <BaseLayout>
      <div className={Style['login-view']}>
        <div>
          <h1>Log in</h1>
        </div>
        <div className={`${Style['form-container']} mb-4`}>
          <div className={`${Style['input-wrap']} mb-3`}>
            <TextField variant={'outlined'} size={'small'} label={'Username'} onChange={(elem)=>{setUsername(elem.target.value)}} />
          </div>
          <div className={Style['input-wrap']}>
            <TextField variant={'outlined'} size={'small'} label={'Password'} onChange={(elem) => {setPassword(elem.target.value)}} />
          </div>
        </div>
   
        <Button variant={'contained'} onClick={onClickedLogin}>Login</Button>

        <div>
          <p style={{color: 'gray'}}>Test username: test@example.com</p>
          <p style={{color: 'gray'}}>Test password: test</p>
        </div>

      </div>
    </BaseLayout>
  )
}

export default LoginView
