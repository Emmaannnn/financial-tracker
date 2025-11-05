import Navigation from '../Partial/Navigation'
import Footer from '../Partial/Footer'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <>
      <Navigation />
          <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout
