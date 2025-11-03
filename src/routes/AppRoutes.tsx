import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'


const AppRoutes = () => {
  return (
    <div>
    {/* NAVIGATION */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>

      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>

    </div>
  )
}

export default AppRoutes
