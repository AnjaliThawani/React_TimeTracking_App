import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function ContentWrapper({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default ContentWrapper