import React,{useEffect} from 'react'
import { Link,useLocation } from "react-router-dom";

export const NavBar = () => {
  let location=useLocation();
  useEffect(() => {
    // console.log(location)
  }, [location]) 
return (
<>
<header className="text-gray-600 body-font border">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
  <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-2 text-xl">Cloudbook</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to="/" className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 ${location.pathname==='/'?"active:text-gray-900 bg-gray-200":""} `}>Home</Link>
      <Link to="/contact" className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 ${location.pathname==='/contact'?"active:text-gray-900 bg-gray-200":""} `}>Contact</Link>
      <Link to="/about" className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 ${location.pathname==='/about'?"active:text-gray-900 bg-gray-200":""} `}>About</Link>
    </nav>
    <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    <Link to="/signup" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Signup
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    <Link to="/logout" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
</>
)
}

export default NavBar