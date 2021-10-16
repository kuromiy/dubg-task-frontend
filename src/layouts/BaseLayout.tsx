import { Container } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header/Header'

export default function BaseLayout(props: { children: JSX.Element[] | JSX.Element}) {
  return (
    <div>
      <Header />
      <Container>
        {props.children}
      </Container>
    </div>
  )
}
