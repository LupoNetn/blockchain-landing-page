import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import Statistics from './components/Statistics'
import Future from './components/Future'

const App = () => {
  return (
    <div className='bg-black'>
     <Navbar />
     <Hero />
     <Partners />
     <Features />
     <Statistics />
     <Future />
    </div>
  )
}

export default App
