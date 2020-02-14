import React, { useState, useEffect } from 'react'
import {
  Grid
} from 'semantic-ui-react'

import { api, API_REPO_CONFERENCE } from '../services/api'
import ConferenceCard from './ConferenceCard'


const style = {
  margin: "2em"
}

const ConferenceGrid = () => {

  const [ conferences, setConferences ] = useState([])

  useEffect(() => {
    api.get(API_REPO_CONFERENCE)
      .then( ({ data }) => {
        console.log(data)
        setConferences(data._embedded.conferences)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])

  const cc = conferences.map( c =>
    <Grid.Column key={c._links.self.href}>
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
