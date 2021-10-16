import React from 'react'
import Style from './TopView.module.scss'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

function TopView() {
  return (
    <div >
      <div className={`${Style['logo-container']} mb-4`}>
        <span className={Style['logo']}>Dubg Task</span>
      </div>
      <div className={Style['actions-container']}>
        <div className={'mb-3'}>
          <Button
            className={`${Style['action-btn']}`}
            component={Link}
            to={'/login'}
            variant={'contained'}
          >
            Log in
          </Button>
        </div>
        <div>
          <Button
            className={Style['action-btn']}
            component={Link}
            to={'signup'}
            variant={'contained'}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TopView
