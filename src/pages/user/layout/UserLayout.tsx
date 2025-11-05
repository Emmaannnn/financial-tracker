import SideNav from '../Partial/SideNav'
import NavBar from '../Partial/NavBar'
import { Outlet } from 'react-router-dom'
 
const UserLayout = () => {
  return (
    <div>
      <div className="drawer drawer-open h-full">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* CONTENT */}
        <div className="drawer-content bg-gray-100">
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
