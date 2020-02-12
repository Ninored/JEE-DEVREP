import React, { useState, useEffect } from 'react'

import {
  Header,
  Container,
  Step,
  Icon,
  Grid,
} from 'semantic-ui-react'

import ConferenceFormSubscription from '../components/ConferenceFormSubscription'

const conferenceExample = {
  id: 1,
  title: 'Title conf',
  description: 'Conférence sur le climat'
}

const Conference = ({ id }) => {
  console.log("Executed Conf")


  const [ conference, setConference ] = useState({})

  useEffect( () => {
    //Appel api
    setTimeout(() => {
      setConference(conferenceExample)
    }, 5000)

  }, [])

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
              { conference.title }
              <Header.Subheader>
                {conference.description }
              </Header.Subheader>
            </Header>
            <ConferenceFormSubscription id={ conference.id }/>

          </Container>
        </Grid.Column>
    </Grid>
  )
}

export default Conference
