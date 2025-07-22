import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const Layout = ()=>{

    return(

        <>
          <div className="min-h-screen bg-Background-Neutral">
            <Navbar/>
            <div className=" w-[95%] lg:w-[90%] mx-auto px-4 sm:px-4 lg:px-8 xl:px-10  pt-20 ">
              <Outlet/>
            </div>
            <Footer/>
          </div>
        </>

        
    )


}

export default Layout