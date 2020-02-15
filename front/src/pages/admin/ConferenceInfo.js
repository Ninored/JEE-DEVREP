import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { api, credentials, API_CONFERENCES_SUBSCRIPTIONS, API_CONFERENCES, API_SUBSCRIPTION_VALIDATE } from '../../services/api'
import {
  Container,
  Segment,
  Header,
  Table,
  Button,
} from 'semantic-ui-react'


const ConferenceInfo = () => {

  const [conference, setConference] = useState({})
  const [subscriptions, setSubscriptions] = useState([])
  const [refresh, setRefresh] = useState(false)
  const { id } = useParams()


  useEffect( () => {

    api.get(`${API_CONFERENCES_SUBSCRIPTIONS}/${id}`, {auth: credentials})
      .then(({data}) => {
        console.log(data)
        setSubscriptions(data)    
      })

    api.get(`${API_CONFERENCES}/${id}`)
      .then(({data}) => {
        console.log(data)
        setConference(data)    
      })

  }, [id, refresh])

  const handleValidate = (id) => {
    api.get(`${API_SUBSCRIPTION_VALIDATE}/${id}`, { auth: credentials }).then(() => setRefresh(!refresh))
  }


  const row = subscriptions.map(c =>
    <Table.Row>
      <Table.Cell textAlign='center'>
        <Header as='h4' content={`${c.email}${c.validated? ' (Validated) ' : '' }`} />
      </Table.Cell>
      <Table.Cell textAlign='right' collapsing>
        <Button.Group >
          { !c.validated && <Button icon='check' onClick={() => handleValidate(c.id)} /> }
          <Button color="red" icon='delete' />
          <Button color="blue" icon='download' />
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  )

  return (
    <Container style={{ marginTop: "2em"}}>
      <Segment>
        <Header>
          {conference.title}
          <Header.Subheader content={conference.description} /> 
        </Header> 
      </Segment>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={2} content="Email" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {row}
        </Table.Body>
      </Table>

    </Container>
  )
}

export default withRouter(ConferenceInfo)
