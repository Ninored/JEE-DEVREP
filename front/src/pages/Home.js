import React from 'react';
import ConferenceGrid from '../components/ConferenceGrid';

import { Container, Image } from 'semantic-ui-react'

import ResponsiveContainer from '../container/ResponsiveContainer'

const Home = (props) => {

  console.log(props)

  return (
    <ResponsiveContainer>
      <Container centered>
        <Image src='https://via.placeholder.com/800x400'
          centered
          style={{marginTop: "1em"}}
        />
      </Container>
      <ConferenceGrid />
    </ResponsiveContainer>
  )
}
export default Home
