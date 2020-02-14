import React, { useState, useEffect } from 'react'
import { api } from '../services/api'
import { withRouter } from 'react-router-dom'

import {
  Header,
  Container,
  Step,
  Icon,
  Grid,
} from 'semantic-ui-react'


import ConferenceFormSubscription from '../components/ConferenceFormSubscription'

const Conference = ({ history, location }) => {
  console.log("Executed Conf")

  const uri  = location.search.split("=")[1]
  const [ conference, setConference ] = useState({})

  console.log(location)


  useEffect( () => {
    api.get(uri)
      .then(({ data }) => {
      setConference(data)
        console.log(data)
    })
    .catch( err => {
      history.push('/')
    })
  }, [uri, history])

  return (
    <Grid verticalAlign='middle' textAlign='center' centered columns={1} style={{height: '100vh', margin: '1em'}} >
        <Grid.Column>
          <Container>
            <Step.Group fluid>
              <Step active>
                <Icon name='signup' />
                <Step.Content>
                  <Step.Title>Sign up</Step.Title>
                  <Step.Description>Enter subscription informations</Step.Description>
                </Step.Content>
              </Step>

              <Step disabled>
                <Icon name='info' />
                <Step.Content>
                  <Step.Title>Subscription registered</Step.Title>
                  <Step.Description></Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
            <Header as='h2' textAlign='center'>
              { conference.name }
              <Header.Subheader>
                {conference.description }
              </Header.Subheader>
            </Header>
            <ConferenceFormSubscription 
              conference={conference}
            />
          </Container>
        </Grid.Column>
    </Grid>
  )
}

export default withRouter(Conference)
