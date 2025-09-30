import React from 'react'
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import Sphers from './components/Sphers/Sphers';
import Stek from './components/Stek/Stek';
import Achievements from './components/Achivments/Achivments';
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts';
import Faq from './components/Faq/Faq';
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Sphers />
      <Achievements />
      <Portfolio />
      <Stek />
      {/* <Partners /> */}
      {/* <Faq /> */}
      {/* <Contacts /> */}
      {/* <Footer/> */}
    </>
  )
}

export default App