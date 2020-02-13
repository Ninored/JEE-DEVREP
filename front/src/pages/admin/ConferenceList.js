import React from 'react'
import {
  Container,
  Button,
  Table,
  Header,
  Input
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const conf = [
  { id: 1, title: "conf"},
  { id: 2, title: "conf"},
  { id: 3, title: "conf"},
  { id: 4, title: "conf"},
  { id: 5, title: "conf"},
  { id: 6, title: "conf"},
  { id: 7, title: "conf"},
]

const ConferenceList = () => {

  const row = conf.map(c => 
    <Table.Row>
      <Table.Cell textAlign='center'>
        <Header as='h4' content={c.title} />
      </Table.Cell>
      <Table.Cell textAlign='right' collapsing>
        <Button.Group>
          <Button as={Link} to={`/admin/conferences/${c.id}`} icon="info" />
          <Button color='red' icon="delete" />
        </Button.Group>
        </Table.Cell>
    </Table.Row>
  )

  return(
    <Container style={{marginTop: '2em'}}  >
      <Input label='Search Conference' placeholder='ConferenceName'/>
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={2} textAlign='left' content='Nom' /> 
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {row}
        </Table.Body>
      </Table>
    </Container>
  )
}

export default ConferenceList
