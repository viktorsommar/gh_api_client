import React from 'react'
import Header from './components/Header'
import GHSearch from './components/GHSearch'

const App = () => {
  return (
    <>
      <section name="header">
        <Header />
      </section>
      <section name="main">
        <GHSearch/>
      </section>
    </>
  )
}

export default App
