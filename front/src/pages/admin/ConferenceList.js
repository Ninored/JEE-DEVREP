import React, { useState, useEffect } from 'react'
import { api, credentials, API_CONFERENCES } from '../../services/api'
import {
  Container,
  Button,
  Table,
  Header,
  Modal,
  Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import RowAddConf from '../../components/RowAddConf'


const ConferenceList = () => {

  const [ conferences, setConferences ] = useState([])
  const [ modal, setModal ] = useState('')
  const [ modalAdd, setModalAdd ] = useState('')
  const [refresh , setRefresh ] = useState(false)

  useEffect(() =>{
    api.get(API_CONFERENCES, {auth: credentials}).then(({data}) => {
      setConferences(data)
    })
  }, [refresh])


  const handleDelete = async (uri) => {
    await api.delete(`${API_CONFERENCES}/${uri}`,{auth: credentials}).then(({data}) => {
      setModal('')
      setRefresh(!refresh)
    })
  }

  const handleConfSubmit = async (data) => {
    api.post(API_CONFERENCES,data ,{auth: credentials}).then(({data}) => {
      setModalAdd(false)
      setRefresh(!refresh)
    })
  }

  const row = conferences.map((c, idx) => 
    <Table.Row key={idx}>
      <Table.Cell textAlign='center'>
        <Header as='h4' content={c.name} />
      </Table.Cell>
      <Table.Cell textAlign='center'>
        {(new Date(c.earlyRegistration)).toLocaleDateString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric' }) }
      </Table.Cell>
      <Table.Cell textAlign='center'>
        {(new Date(c.lateRegistration)).toLocaleDateString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric' }) }
      </Table.Cell>
      <Table.Cell textAlign='center' collapsing>
        <Button.Group>
          <Button as={Link} to={`/admin/conferences/${c.id}`} icon="info" />
          <Button onClick={ () => setModal(c.id)} color='red' icon="delete" />
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  )

  return(
    <Container style={{marginTop: '2em'}}  >
      <Modal open={modal !=='' } basic size='small'>
        <Header icon='delete' content='Delete Conference' />
        <Modal.Content>
          <p>
            Are you sure you want to delete the conference ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button  onClick={ () => setModal('')} basic color='red' inverted icon='remove' content='No' />
          <Button 
            onClick={() => handleDelete(modal)}
            color='green' 
            inverted 
            icon='checkmark' 
            content='Yes' 
          />
        </Modal.Actions>
      </Modal>

      <Segment> 
        <Button icon='plus' onClick={() => setModalAdd(true)}/>
      </Segment>

      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center' content='Nom' /> 
            <Table.HeaderCell textAlign='center' content='EarlyRegistration' /> 
            <Table.HeaderCell textAlign='center' content='LateRegistration' /> 
            <Table.HeaderCell /> 
          </Table.Row>
        </Table.Header>
        <Table.Body>
            <RowAddConf show={modalAdd} onSubmit={handleConfSubmit}/>
          {row}
        </Table.Body>
      </Table>
    </Container>
  )
}

export default ConferenceList
