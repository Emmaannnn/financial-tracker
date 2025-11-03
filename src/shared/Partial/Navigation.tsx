import { Link } from 'react-router-dom'

const Navigation = () => {
  return (

    <nav className="flex justify-center items-center w-full py-4 border-b fixed shadow-xs bg-white border-black/15 tracking-tight text-balance z-50">
      <div className="container">
        <div className="flex justify-between px-20">

          <div className="flex justify-start items-center font-logo text-[#69247C]">
            <Link to="/">FTracker</Link> 
          </div>

          <div>
            <ul className="flex justify-center items-center gap-10 font-bold text-[#69247C]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>


        </div>
      </div>


    </nav>


  )
}

export default Navigation
