import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

function TopView() {
  return (
    <div>
      <Button
        component={Link}
        to={'/login'}
        variant={'contained'}
      >
        Login
      </Button>
    </div>
  )
}

export default TopView
