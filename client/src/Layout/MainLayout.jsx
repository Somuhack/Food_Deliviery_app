import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({children}) => {
  return (
  <>
  <nav>
    <Navbar/>
  </nav>
  <main>{children}</main>
  <footer>
    <Footer/>
  </footer>
  </>
  )
}

export default MainLayout