import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Icon
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const MobileContainer = ({ children, location }) => {

  const [ ctx, ] = useAppContext()

  const [ sidebarVisible, setSidebarVisible ] = useState(false)

  return(
    <Responsive
      style={{ height: '100%'}}
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation='push'
        inverted
        vertical
        onHide={ () => { setSidebarVisible(false) }}
        visible={sidebarVisible}
      >
        <Menu.Item as={Link} to='/' active={ location.pathname === '/'}>Home</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarVisible}>
        <Segment
          inverted
          textAlign='center'
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={() => { setSidebarVisible(true)}}>
                <Icon name='sidebar' />
              </Menu.Item>
              { !ctx.authenticated && 
                <Menu.Item position='right'>
                  <Button as={Link} to='/login' inverted content='Log in' />
                </Menu.Item>
              }
            </Menu>
          </Container>
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

export default withRouter(MobileContainer)
