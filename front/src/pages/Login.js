import React from 'react'

import { 
  Grid
} from 'semantic-ui-react'

import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <Grid
      textAlign='center' 
      style={{ height: '100vh' }} 
      verticalAlign='middle'
    >
      <Grid.Column mobile={12} computer={4}>
        <LoginForm />
      </Grid.Column>
    </Grid>
  )
}

export default Login
