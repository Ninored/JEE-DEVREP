import React from 'react';
import Carous from '../components/Carous';
import ConferenceListe from '../components/ConferenceListe';

import Container from 'react-bootstrap/Container';
import Header from '../components/Header'

const Home = () => (
  <Container>
    <Header />
    <Carous />
    <ConferenceListe />
  </Container>
)

export default Home
