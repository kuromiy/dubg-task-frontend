import React from 'react'
import Style from './Header.module.scss'

import { Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={`${Style.header} pl-2`}>
      <Link to={'/'} className={Style['logo-top']}>DubgTask</Link>
      <Link to={'/'}>Test</Link>
    </div>
  )
}

export default Header
