import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import {
  Header,
  Container,
  Step,
  Icon,
  Grid,
  Segment,
} from 'semantic-ui-react'

const SubscriptionRegistered = ({ history }) => {

  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, 10000)
  })

  return (
    <Grid verticalAlign='middle' textAlign='center' centered columns={1} style={{height: '100vh', margin: '1em'}} >
        <Grid.Column>
          <Container>
            <Step.Group fluid>
              <Step completed>
                <Icon name='signup' />
                <Step.Content>
                  <Step.Title>Sign up</Step.Title>
                  <Step.Description>Enter subscription informations</Step.Description>
                </Step.Content>
              </Step>

              <Step active>
                <Icon name='info' />
                <Step.Content>
                  <Step.Title>Subscription registered</Step.Title>
                  <Step.Description></Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
            <Segment placeholder>
              <Header icon>
                <Icon name='info' />
                Subscription registered
                <Header.Subheader>
                  An administrator will shortly validate your subscription. You will recieve an email for the payment.  
                </Header.Subheader>
              </Header>

            </Segment>

          </Container>
        </Grid.Column>
    </Grid>
  )
}

export default withRouter(SubscriptionRegistered)
