import React from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/expériences/Experience'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio'
import Service from './Components/services/Service'
import Temoignage from './Components/temoignages/Temoignage'


export const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Temoignage/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App