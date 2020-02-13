import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import { useAppContext } from '../context'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const DesktopContainer = ({ children, location }) => {
  const [ ctx ,] = useAppContext()
  return(
    <Responsive style={{ height: '100%'}} getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
      >
        <Segment
          inverted
          textAlign='center'
          vertical
        >
          <Menu
            size='large'
            inverted
            secondary
            pointing
          >
            <Container>
              <Menu.Item as={Link} to='/' active={ location.pathname === '/'}>Home</Menu.Item>
              { ctx.authenticated && <Menu.Item as={Link} to='/admin' active={ location.pathname.startsWith('/admin')}>Admin</Menu.Item>}
              <Menu.Item position='right'>
                <Button inverted as={Link} to='/login'>
                  Log in
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Responsive>

  )
}

export default withRouter(DesktopContainer)
