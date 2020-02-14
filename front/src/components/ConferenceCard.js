import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  Button,
  Image
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
    <Card fluid>
      <Image wrapped ui={false} src="https://via.placeholder.com/300x300" />
      <Card.Content>
        <Card.Header>{conf.name}</Card.Header>
        <Card.Description>{conf.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as={Link} to={`/subscription?uri=${conf._links.self.href}`}>Registration</Button>
      </Card.Content>
    </Card>
  )
}

export default ConferenceCard
