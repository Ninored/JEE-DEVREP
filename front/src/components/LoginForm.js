import React, { useState } from 'react'
import { 
  Button,
  Form,
  Segment,
  Message
} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { useAppContext } from '../context'
import { credentials , api, API_LOGIN} from '../services/api'

const LoginForm = ({ history }) => {

  const { handleSubmit, errors, control} = useForm()
  const [ loginError, setLoginError ] = useState('')
  const [ ,dispatch] = useAppContext()

  const onSubmit = (values) => {
    api.post(API_LOGIN, {
      username: values.email,
      password: values.password
    }).then( () => {
       dispatch({ type: 'loggedIn' })
      credentials.username = values.email
      credentials.password = values.password
    }).catch(err => {
      console.log(err)
        setLoginError('User not found')
    })
    console.log(values)
   
    credentials.usename = values.email
    credentials.password = values.password
    history.push('/admin')
  }

  return(
    <Form error={loginError !=='' } size='large' onSubmit={handleSubmit(onSubmit)}>
      <Message
        error
        header="Connection failed"
        content={loginError}
      />
      <Segment stacked>
        <Controller 
          error={!!errors.email ?  errors.email.message : false } 
          as={Form.Input}
          control={control}
          name='email'
          label='Email'
          placeholder='email@example.fr'
          defaultValue=''
          rules={{
            required: 'Email required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          }}
        />
        <Controller 
          error={!!errors.password ?  errors.password.message : false } 
          as={Form.Input}
          control={control}
          name='password'
          type='password'
          label='Password'
          defaultValue=''
          rules={{
            required: 'Password required',
          }}
        />
        <Button fluid size='large' type='submit'>
          Connexion
        </Button>
      </Segment>
    </Form>
  )
}

export default withRouter(LoginForm)
