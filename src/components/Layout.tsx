import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children} : {children: any}) => {
  return (
    <div className='flex flex-col h-screen w-screen p-3'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout