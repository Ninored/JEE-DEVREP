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

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const DesktopContainer = ({ children, location }) => {
  return(
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      
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
