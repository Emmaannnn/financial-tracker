import { Routes, Route } from 'react-router-dom'
import RootLayout from '@/shared/layout/RootLayout'
import Home from '../pages/landingpage/Home'
import About from '../pages/landingpage/About'
import Login from '../pages/landingpage/Login'
import UserLayout from '../pages/user/shared/layout/UserLayout'
import Dashboard from '../pages/user/pages/Dashboard'
import Transaction from '../pages/user/pages/Transaction'
import Settings from '../pages/user/pages/Settings'
import Analytics from '../pages/user/pages/Analytics'
import Bills from '../pages/user/pages/Bills'
import Budget from '../pages/user/pages/Budget'


const AppRoutes = () => {
  return (

      <Routes>

        <Route element={<RootLayout/>}>
          {/* NAVIGATION */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>

          {/* GO TO LOG IN PAGE */}
          <Route path='/login' element={<Login />}/>
        </Route>

          {/* IF LOGGED IN GO TO USER DASHBOARD */}
        <Route element={<UserLayout />}>
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/Transaction' element={<Transaction />}/>
          <Route path='/Settings' element={<Settings />}/>
          <Route path='/Analytics' element={<Analytics />}/>
          <Route path='/Bills' element={<Bills />}/>
          <Route path='/Budget' element={<Budget />}/>
        </Route>

      </Routes>

  )
}

export default AppRoutes
