import React from 'react'

import { Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to={'/test'}>Test</Link>
    </div>
  )
}

export default Header
