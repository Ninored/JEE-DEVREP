import React from 'react'
import { 
  Button,
  Form,
  Segment
} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { useAppContext } from '../context'

const LoginForm = ({ history }) => {

  const { handleSubmit, errors, control} = useForm()
  const [ ,dispatch] = useAppContext()

  const onSubmit = (values) => {
    console.log(values)
    dispatch({
      type: 'loggedIn',
      value: {
        username: values.email,
        password: values.password
      }
    })
    history.push('/admin')
  }

  return(
    <Form size='large' onSubmit={handleSubmit(onSubmit)}>
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
          error={!!errors.email ?  errors.email.message : false } 
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
