import React, { useState, useEffect } from 'react'
import {
  Container,
  Segment,
  Header,
  Table,
  Button,
} from 'semantic-ui-react'


const inscript = [
  { email: 'afe@fr.fr', validated: true },
  { email: 'afe@fr.fr', validated: true },
  { email: 'afe@fr.fr', validated: true },
  { email: 'afe@fr.fr', validated: true },
  { email: 'afe@fr.fr', validated: true },
  { email: 'afe@fr.fr', validated: true },
]

const ConferenceInfo = () => {

  const [conference, setConference] = useState({})
  useEffect( () => {
    setConference({
      title: "Titre",
      description: "Descriptoin"
    })

  }, [])

  const row = inscript.map(c =>
    <Table.Row>
      <Table.Cell textAlign='center'>
        <Header as='h4' content={c.email} />
      </Table.Cell>
      <Table.Cell textAlign='right' collapsing>
        <Button.Group >
          <Button icon='check' />
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

export default ConferenceInfo
