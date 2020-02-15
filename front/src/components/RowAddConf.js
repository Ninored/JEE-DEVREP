import React, { useState } from 'react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';


import {
  Table,
  Input,
  Button
} from 'semantic-ui-react'

const RowAddConf = ({ show, onSubmit }) => {

  const [ name, setName ] = useState()
  const [ earlyRegistration, setER ] = useState()
  const [ lateRegistration, setLR ] = useState()

  if(!show) return null

  const handleSubmit = () => {
    const payload = {
      name,
      earlyRegistration,
      lateRegistration
    }
    onSubmit(payload)
  }

  return (
    <Table.Row>
      <Table.Cell>
        <Input placeholder="Conferance name" onChange={((_, data) => setName(data.value))} /> 
      </Table.Cell>
      <Table.Cell>
        <SemanticDatepicker 
          format="DD-MM-YYYY"
          onChange={((_, data) => setER(data.value))} /> 
      </Table.Cell>
      <Table.Cell>
        <SemanticDatepicker 
          format="DD-MM-YYYY"
          onChange={((_,data) => setLR(data.value))} /> 
      </Table.Cell>
      <Table.Cell>
        <Button icon='upload' onClick={handleSubmit} />
      </Table.Cell>
    </Table.Row>
  )
}

export default RowAddConf
