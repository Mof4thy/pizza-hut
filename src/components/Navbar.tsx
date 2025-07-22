import  { useEffect, useState } from 'react'
import logo from '../assets/Pizza-Hut-Logo.svg'
import { useNavigate ,useLocation  } from 'react-router-dom'
import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Navbar = ()=>{

    const navigate = useNavigate();
    const location = useLocation()
    const [currentPage , SetcurrentPage] = useState(location.pathname)
    const { currentUser , signOut } = useAuth();
    useEffect(()=>{
        SetcurrentPage(location.pathname)
    },[location])
    

    const handleNavigate = (path: string)=>{
        if(location.pathname !== path){
            navigate(path)
        }
    }

    const [isOpen , setIsOpen] = useState(false)

    const handleMenu = ()=>{
        setIsOpen(!isOpen)
    }





    return(
        <>

            <div className=' fixed left-0 right-0 z-50 top-0 flex justify-between bg-Dark-Accent py-4 px-4 sm:px-6 md:px-15 h-20'>
                {/* logo */}
                <div className='logo flex items-center justify-center gap-1 md:gap-2'>
                    <img src={logo} alt="logo" className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12' />
                    <h1 className=' text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-Background-Neutral'>Pizza Hut</h1>               
                </div>

                {/* menu icon */}
                <div className='sm:hidden flex items-center justify-center'>
                    <Menu className='w-6 h-6 text-Background-Neutral' onClick={handleMenu} />
                </div>


                {/* navigation */}
                <nav className='hidden sm:flex '>
                    {/* desktop navigation */}
                    <ul className='flex  items-center justify-center text-Background-Neutral gap-4 md:gap-6 lg:gap-8 text-sm md:text-md lg:text-lg '>
                        <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/'|| currentPage === '/home' ? 'text-Primary-Red' : ''}` }
                            onClick={()=>{handleNavigate('/')}}>
                            Home
                        </li>
                        <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/menu' ? 'text-Primary-Red' : ''}` }
                            onClick={()=>{handleNavigate('/menu')}}>
                            Menu
                        </li>
                        <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/about' ? 'text-Primary-Red' : ''}` }
                            onClick={()=>{handleNavigate('/about')}}>
                            About
                        </li>
                        <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/contact' ? 'text-Primary-Red' : ''}` }
                            onClick={()=>{handleNavigate('/contact')}}>
                            Contact
                        </li>
                    </ul>
                </nav>

                {/* login and register */}
                {currentUser ? (
                    <div className='hidden sm:flex gap-4 items-center text-sm md:text-md lg:text-lg'>
                        <span className='text-Background-Neutral text-sm md:text-md lg:text-lg'>Welcome, {currentUser.email}</span>
                        <button className='bg-Background-Neutral text-Dark-Accent px-2  py-1  rounded-md hover:bg-Warm-Accent hover:cursor-pointer transition-all duration-300'
                                onClick={()=>{signOut()}}>Logout
                        </button>
                    </div>
                ) : (
                <div className='hidden sm:flex gap-4 items-center text-sm md:text-md lg:text-lg'>
                    <button className='bg-Background-Neutral text-Dark-Accent px-2 lg:px-5 py-1 lg:py-2 rounded-md hover:bg-Warm-Accent hover:cursor-pointer transition-all duration-300'
                        onClick={()=>{handleNavigate('/login')}}>Login</button>
                    <button className='bg-Background-Neutral text-Dark-Accent px-2 lg:px-5 py-1 lg:py-2 rounded-md  hover:bg-Warm-Accent hover:cursor-pointer transition-all duration-300'
                        onClick={()=>{handleNavigate('/register')}}>Register</button>
                </div>
                )}


                {/* mobile navigation */}
                <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{opacity:0,y:-20}}
                        animate={{opacity:1,y:0}}
                        exit={{opacity:0,y:-20}}
                        transition={{duration:0.3}}     
                            className='sm:hidden flex flex-col  p-4 gap-4 z-50 bg-Dark-Accent absolute top-full  left-0 right-0 w-full '>
                        <ul className=' flex flex-col gap-2  text-Background-Neutral '>
                            <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/'|| currentPage === '/home' ? 'text-Primary-Red' : ''}` }
                                onClick={()=>{handleNavigate('/')}}>
                                Home
                            </li>
                            <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/menu' ? 'text-Primary-Red' : ''}` }
                                onClick={()=>{handleNavigate('/menu')}}>
                                Menu
                            </li>
                            <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/about' ? 'text-Primary-Red' : ''}` }
                                onClick={()=>{handleNavigate('/about')}}>
                                About
                            </li>
                            <li className={` hover:cursor-pointer font-bold transition-all duration-300 ${currentPage === '/contact' ? 'text-Primary-Red' : ''}` }
                                onClick={()=>{handleNavigate('/contact')}}>
                                Contact
                            </li>
                        </ul>
                        <div className='flex gap-4 items-center text-sm '>
                        {currentUser ? (
                            <>
                                <span className='text-Background-Neutral text-sm md:text-md lg:text-lg'>Welcome, {currentUser.email}</span>

                                <button className='bg-Background-Neutral text-Dark-Accent px-2  py-1  rounded-md hover:bg-Warm-Accent hover:cursor-pointer transition-all duration-300'
                                    onClick={()=>{signOut()}}>Logout
                                </button>
                            </>
                            ) : (
                                <>
                                <button className='bg-Background-Neutral text-Dark-Accent px-2  py-1  rounded-md hover:bg-Warm-Accent hover:cursor-pointer transition-all duration-300'
                                    onClick={()=>{handleNavigate('/login')}}>Login
                                </button>
                                <button className='bg-Background-Neutral text-Dark-Accent px-2 py-1 rounded-md  hover:bg-Warm-Accent hover:cursor-pointer transition-all duration-300'
                                    onClick={()=>{handleNavigate('/register')}}>Register
                                </button>
                                </>
                            )}
                        </div>
                    </motion.nav>       
                )}
                </AnimatePresence>

                    

            </div>

        </>
    )


}

export default Navbar;