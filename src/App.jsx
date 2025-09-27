import React from 'react'
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import Sphers from './components/Sphers/Sphers';
import Stek from './components/Stek/Stek';
import Achievements from './components/Achivments/Achivments';
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Sphers />
      <Achievements />
      <Stek />
      <Portfolio />
      <Contacts />
    </>
  )
}

export default App