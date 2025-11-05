import SideNav from '../Partial/SideNav'
import NavBar from '../Partial/NavBar'
import { Outlet } from 'react-router-dom'
 
const UserLayout = () => {
  return (
    <div>
      <div className="drawer drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* CONTENT */}
        <div className="drawer-content">
          <NavBar/>
          <Outlet/>
        </div>

        {/* SIDEBAR CONTENT */}
        <SideNav/>

      </div>

    </div>
  )
}

export default UserLayout
