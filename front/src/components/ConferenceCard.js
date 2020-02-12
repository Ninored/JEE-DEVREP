import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  Button
} from 'semantic-ui-react'



/*
 *  props:
 *   conference:
 *    id
 *    title
 *    link
 */

const ConferenceCard = ({ conference: conf}) => {

  return(
    <Card>
      <Card.Content>
        <Card.Header>{conf.title}</Card.Header>
        <Card.Description>{conf.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as={Link} to={`/conference/${conf.id}`}>Registration</Button>
      </Card.Content>
    </Card>
  )
}

export default ConferenceCard
