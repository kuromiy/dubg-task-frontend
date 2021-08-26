import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

function TopView() {
  return (
    <div>
      <h1>Top</h1>
      <Button
        component={Link}
        to={'/login'}
        variant={'contained'}
      >
        Log in
      </Button>

      <Button
        component={Link}
        to={'signup'}
        variant={'contained'}
      >
        Sign up
      </Button>
    </div>
  )
}

export default TopView
