import React from 'react'
import About from './components/about'
import Contacts from './components/contacts'
import Experience from './components/experience'
import Footer from './components/footer'
import Header from './components/header'
import Nav from './components/nav'
import Portfolio from './components/portfolio'
import Services from './components/services'
import Testimonials from './components/testimonials'

const App = () => {
  return (
    <div className='bluelight'>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contacts/>
    <Footer/>
    
    </div>
  )
}

export default App