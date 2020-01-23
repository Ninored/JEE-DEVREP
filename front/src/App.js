import React from 'react';
import logo from './logo.svg';
import './App.css';


import Container from 'react-bootstrap/Container';

import Header from './components/Header'
import ConferenceListe from './components/ConferenceListe'
import Carous from './components/Carous'

const App = () => { return (
  <Container>
    <Header />
    <Carous />
    <ConferenceListe />
  </Container>
)}

export default App;
