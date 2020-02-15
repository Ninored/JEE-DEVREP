import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { api, API_CONFERENCES , API_SUBSCRIPTION} from '../services/api'

import {
  Form,
  Button,
  Message
} from 'semantic-ui-react'

import { useForm, Controller } from 'react-hook-form'

const titleOptions = [
  { key: 'Prof', text: 'Prof.', value: 'Prof' },
  { key: 'Dr', text: 'Dr.', value: 'Dr' },
  { key: 'Ms', text: 'Ms.', value: 'Ms' },
  { key: 'Mrs', text: 'Mrs.', value: 'Mrs' },
  { key: 'Mr.', text: 'Mr.', value: 'Mr' },
]


const ConferenceFormSubscription = ({ history, location, conference}) => {

  const { id }  = useParams()
  const { handleSubmit, errors, control} = useForm()
  const [ sending, setSending ] = useState(false)
  const [ subscriptionType, setSubscriptionType ] = useState([])
  const [ postError, setPostError ] = useState('')

  useEffect(() => {
    if(conference)
    api.get(`${API_CONFERENCES}/${id}`)
      .then(({data}) => {
        console.log(data)
        const res = data.subscriptionTypes.map((s) => {return {
          key: s.name,
          value: s.id,
          text: s.name
        }})
        setSubscriptionType(res)
      })
  }, [conference, id])


  const onSubmit = values => {
    setSending(true)
    const payload = {
      conference: { id: id },
      ...values,
      subscriptionType: {id: values.subscriptionType }
    }
    console.log(payload)
    api.post(API_SUBSCRIPTION, payload).then(res =>{

      history.push('/subscription/registered', { state: { fromSubscription: true }})
    }).catch( err => {
      history.push('/subscription/registered', { state: { fromSubscription: true }})
      console.log(err)
      setPostError("Please contact the administrator")
      setSending(false)
    })
  }

  return (
    <Form loading={sending} onSubmit={handleSubmit(onSubmit)}>
      { postError !== '' && 
      <Message 
        error
        header="Error while submiting your subscription"
        content={postError}
      />
      }
      <Form.Group widths='equal'>
        <Controller 
          error={!!errors.title ?  errors.title.message : false } 
          as={<Form.Select options={titleOptions} />}
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
          name='firstName'
          label='First Name'
          placeholder='First Name'
          defaultValue=''
          rules={{required: 'First name required.' }}
        />
        <Controller 
          error={!!errors.firstname ?  errors.firstname.message : false } 
          as={Form.Input}
          control={control}
          name='lastName'
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
          rules={{
            required: 'Zip required.' ,
            pattern: {
              value: /^[0-9]*$/i,
              messsage: "Invalide zip code"
            }
          }}
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
      <Controller 
        error={!!errors.type ?  errors.type.message : false } 
        as={<Form.Select options={subscriptionType} />}
        control={control}
        name='subscriptionType'
        label='Subscription Type'
        placeholder='Subscription Type'
        onChange={ ([_, { value }]) => value } 
        rules={{
          required: 'Subscription type is required',
        }}
      />
      <Button type='submit'>Confirm</Button>
    </Form>
  )
}

export default withRouter(ConferenceFormSubscription)
