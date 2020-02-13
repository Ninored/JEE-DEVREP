import React from 'react'
import {
  Grid
} from 'semantic-ui-react'

import ConferenceCard from './ConferenceCard'

const conferences = [
  { id: 1, title: "Conf 1", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
  { id: 2, title: "Conf 2", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
  { id: 3, title: "Conf 3", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
  { id: 4, title: "Conf 4", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
  { id: 5, title: "Conf 5", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
  { id: 6, title: "Conf 6", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
  { id: 7, title: "Conf 7", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
  { id: 8, title: "Conf 8", description: "Conférence sur le climant et les changements que cela implique", link: "link conf" },
]

const style = {
  margin: "2em"
}

const ConferenceGrid = () => {

  const cc = conferences.map( c =>
    <Grid.Column key={c.id}>
      <ConferenceCard conference={c} />
    </Grid.Column>
  )

  return (
    <Grid container stretched stackable columns={4} style={{...style}}>
      { cc }
    </Grid>
  )
}

export default ConferenceGrid
