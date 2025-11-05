import { Button } from '@/components/ui/button'
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";


const NavBar = () => {

  return (
    <div className="flex justify-between items-center px-5 bg-gray-100 py-5">
      <div className="text-lg hidden md:block">
          <div className="font-logo text-[#69247C]">Hi Emman!</div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <label className="input border border-black/15 bg-transparent shadow-xs p-2">
          <FaSearch className="h-[1em] opacity-50" />
          <input type="search" required placeholder="Search" />
        </label>

        <Button className='bg-transparent shadow-sm rounded-full hover:bg-[#DA498D]/30 cursor-pointer'>
          <IoNotificationsOutline className="text-[#69247C] font-bold"/>
        </Button>
        
      </div>
    </div>
  )
}




export default NavBar
