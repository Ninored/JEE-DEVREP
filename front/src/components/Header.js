import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Menu,
  Container,
  Segment,
  Button

} from 'semantic-ui-react'

const Header = ({ location }) => {

  const [ sideBare, setSideBar ] = useState(false)

  return (
    <Segment
      vertical
      inverted
      textAlign='center'
    >
      <Menu
        size='large'
        pointing
        secondary
        inverted
      >
        <Container>
          <Menu.Item as={Link} to='/' active={ location.pathname === '/'}>Home</Menu.Item>
          <Menu.Item position='right'>
            <Button inverted as={Link} to='/login'>
              Log in
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    </Segment>
  )
}

export default withRouter(Header)
