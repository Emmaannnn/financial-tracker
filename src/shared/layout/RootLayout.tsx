import React from 'react'
import Navigation from '../Partial/Navigation'
import Footer from '../Partial/Footer'


interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout : React.FC<RootLayoutProps> = ( {children} ) => {
  return (
    <>
      <Navigation />
          <main>{children}</main>
      <Footer/>
    </>
  )
}

export default RootLayout
