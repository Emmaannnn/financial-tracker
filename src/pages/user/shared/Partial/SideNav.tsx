// import { useEffect, useRef } from 'react'
// import { Button } from '@/components/ui/button'
import { supabase } from "../../../../lib/supabaseClient";
import { useNavigate, Link, useLocation } from "react-router-dom"
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineTransaction } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiActualbudget } from "react-icons/si";
import { VscSettings } from "react-icons/vsc";
import { TbLogout2 } from "react-icons/tb";

const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/"); // redirect to login page
  };

  const sideNavButton = [
    {
      icons: LuLayoutDashboard ,
      title: 'Dashboard'
    }, {
      icons: SiActualbudget,
      title: 'Budget'
    }, {
      icons: AiOutlineTransaction,
      title: 'Transaction'
    }, {
      icons: HiOutlineDocumentReport,
      title: 'Analytics'
    }, {
      icons: IoNewspaperOutline,
      title: 'Bills'
    }, {
      icons: VscSettings,
      title: 'Settings'
    }
  ];

  return (

      <div className="drawer-side is-drawer-close:overflow-visible shadow-[0_3px_8px_rgba(0,0,0,0.05)] ">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="is-drawer-close:w-14 md:is-drawer-close:w-18 is-drawer-open:w-54 bg-white text-[#69247C] flex flex-col items-start min-h-full">
          {/* Sidebar content here */}

          <ul className="menu w-full grow gap-1 font-[Inter]">

            <li className="is-drawer-close:border-0 md:border-b md:border-black/15 py-3 ">
              {/* <img src="" className="rounded-full" alt="" /> */}
              <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:shadow-md hover:bg-[#DA498D]/30 focus:text-[#69247C]" data-tip="Home">
                <div className=" rounded-full md:w-8 md:h-8 bg-[#69247C]"/>
                <span className="is-drawer-close:hidden text-lg w-full font-bold font-logo">FTracker</span>
              </button>
            </li>
      
            {sideNavButton.map((sideButton , index) => {
              const Icons = sideButton.icons;

              return (

                <li key={index}>
                  <Link to={`/${sideButton.title}`} id={location.pathname === `/${sideButton.title}` ? 'active-sidebar-btn' : 'not-active'} className="is-drawer-close:tooltip hover:bg-[#DA498D]/30 focus:text-[#69247C] hover:shadow-md p-3 is-drawer-close:tooltip-right flex gap-4" data-tip={sideButton.title}>
                    <Icons className="text-xl md:text-2xl text-center md:is-drawer-close:w-full" />
                    <span className=" is-drawer-close:hidden font-semibold text-xs">{sideButton.title}</span>
                  </Link>
                </li>
                );
              })}


            <li className="is-drawer-close:border-0 md:border-black/15 hover:shadow-md">
              <button onClick={handleLogout} className="flex p-3 rounded-sm cursor-pointer gap-4 font-semibold is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-[#DA498D]/30 focus:text-[#69247C]" data-tip="Log out">
                <TbLogout2 className="text-2xl md:is-drawer-close:w-full"/>
                <span className="is-drawer-close:hidden">Log out</span>
              </button>
            </li>
          </ul>

        <div className="m-3 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Open">
            <label htmlFor="my-drawer-4" className="btn btn-ghost w-full bg-linear-65 from-purple-500 to-pink-500 border-none text-white hover:bg-[#69247C]/90 drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="inline-block size-4 my-1.5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            <span className="is-drawer-close:hidden">Close</span>
            </label>
        </div>


        </div>
        

      </div>




  )
}

export default SideNav
