import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import {
  Form,
  Button,
} from 'semantic-ui-react'

import { useForm, Controller } from 'react-hook-form'

const options = [
  { key: 'Prof', text: 'Prof.', value: 'Prof' },
  { key: 'Dr', text: 'Dr.', value: 'Dr' },
  { key: 'Ms', text: 'Ms.', value: 'Ms' },
  { key: 'Mrs', text: 'Mrs.', value: 'Mrs' },
  { key: 'Mr.', text: 'Mr.', value: 'Mr' },
]

/*
const InputFormField = ({ errors, label, name, placeholder, register}) =>{
  console.log(errors)
  return <Form.Field error={!!errors}>
        <label>{label}</label>
        {errors && 
          <Label pointing='below' color='red' content={errors.message} />
        }
        <input 
          placeholder={placeholder}
          name={name}
          ref={register}
        />
  </Form.Field>
}
*/

const ConferenceFormSubscription = ({ history }) => {

  const { handleSubmit, errors, control} = useForm()

  const [ sending, setSending ] = useState(false)

  const onSubmit = values => {
    setSending(true)
    setTimeout( () => {
      history.push('/subscription/registered', { state: { fromSubscription: true }})
      
    }, 3000)
  }

  return (
    <Form loading={sending} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group widths='equal'>
        <Controller 
          error={!!errors.title ?  errors.title.message : false } 
          as={<Form.Select options={options} />}
          control={control}
          name='title'
          label='Title'
          onChange={ ([_, { value }]) => value } 
          placeholder='Title'
          rules={{required: 'Title required.' }}
        />
        <Controller 
          error={!!errors.firstname ?  errors.firstname.message : false } 
          as={Form.Input}
          control={control}
          name='firstname'
          label='First Name'
          placeholder='First Name'
          defaultValue=''
          rules={{required: 'First name required.' }}
        />
        <Controller 
          error={!!errors.firstname ?  errors.firstname.message : false } 
          as={Form.Input}
          control={control}
          name='lastname'
          label='Last Name'
          placeholder='Last Name'
          defaultValue=''
          rules={{required: 'Last name required.' }}
        />
      </Form.Group>
      <Controller 
        error={!!errors.institution ?  errors.institution.message : false } 
        as={Form.Input}
        control={control}
        name='institution'
        label='Institution'
        placeholder='InstitutionLast'
        defaultValue=''
        rules={{required: 'Institution required.' }}
      />
      <Controller 
        error={!!errors.address ?  errors.address.message : false } 
        as={Form.Input}
        control={control}
        name='address'
        label='Address'
        placeholder='Address'
        defaultValue=''
        rules={{required: 'Address required.' }}
      />
      <Form.Group widths='equal'>
        <Controller 
          error={!!errors.city ?  errors.city.message : false } 
          as={Form.Input}
          control={control}
          name='city'
          label='City'
          placeholder='City'
          defaultValue=''
          rules={{required: 'City required.' }}
        />
        <Controller 
          error={!!errors.zip ?  errors.zip.message : false } 
          as={Form.Input}
          control={control}
          name='zip'
          label='Zip'
          placeholder='Zip'
          defaultValue=''
          rules={{required: 'Zip required.' }}
        />
        <Controller 
          error={!!errors.country ?  errors.country.message : false } 
          as={Form.Input}
          control={control}
          name='country'
          defaultValue=''
          label='Country'
          placeholder='Country'
          rules={{required: 'Country required.' }}
        />
      </Form.Group>
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
        error={!!errors.phone ?  errors.phone.message : false } 
        as={Form.Input}
        control={control}
        name='phone'
        label='Phone'
        placeholder='+33 123456789'
        defaultValue=''
        rules={{
          required: 'phone required',
          pattern: {
            value: /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s.]?[(]?[0-9]{1,3}[)]?([-\s.]?[0-9]{3})([-\s.]?[0-9]{3,4})/i,
            message: "Invalid phone number"
          }
        }}
      />
      <Button type='submit'>Confirm</Button>
    </Form>
  )
}

export default withRouter(ConferenceFormSubscription)
