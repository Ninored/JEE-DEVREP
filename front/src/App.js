import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';

import Header from './components/Header'
import Home from './pages/Home'

const App = () => { return (
  <Container>
    <Header />
    <Home />
  </Container>
)}

export default App;
