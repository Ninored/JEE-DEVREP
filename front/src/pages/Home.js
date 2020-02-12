import React from 'react';
import ConferenceGrid from '../components/ConferenceGrid';

import { Container, Image } from 'semantic-ui-react'

import Header from '../components/Header'


const Home = (props) => {

  console.log(props)

  return (
    <>
      <Header />
      <Container>
        <Image src='https://via.placeholder.com/800x400'
          centered
          style={{marginTop: "1em"}}
        />
      </Container>
      <ConferenceGrid />
    </>
  )
}
export default Home
