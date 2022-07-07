import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({data})=>{
    const [open,setOpen] = React.useState(false);
    const ref = useRef();
  
    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if (open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
      };
      document.addEventListener("mousedown", checkIfClickedOutside);
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [open]);

    return (
        <>
        <nav className=" border-gray-200  py-5">
            <div ref={ref} className="container flex flex-wrap justify-between items-center mx-auto ">
                <a href="/" className="flex items-center">
                <img
                    src="/assets/img/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />

                </a>
                <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 mx-auto"
                id="mobile-menu-2"
                >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:font-medium justify-content-left items-left">
                        {data.map(val => (
                        <li ref={ref} className='nav-item' key={val.id}>
                            <Link to={val.path} >
                            <a
                                className={`active-item ${val.selected ? "text-[#3491FF] active"  : "text-[#587FA6]"} font-medium text-lg btn-group__item`}
                                aria-current="page"
                            >
                                {val.title}
                            </a>
                            </Link>
                        </li>
                        ))}

                    <li className='relative nav-item'>
                    <a
                        href="#!"
                        className={`active-item text-[#587FA6] font-medium text-lg btn-group__item flex items-center`}
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={()=>setOpen(!open)}
                    >
                        Contact
                        <svg
                        className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </a>


                    <ul
                        className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}            
                        style={{display:open?'block':'none'}}
                    >
                        <div className="py-1" role="none">
                            <a
                            href="mailto:demo@gmail.com"
                            className="text-gray-700 block px-4 py-2 text-sm text-end"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                            >
                            demo@gmail.com
                            </a>
                            <a
                            href="tel:+917879829336"
                            className="text-gray-700 block px-4 py-2 text-sm text-end"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                            >
                            +91-7879829336
                            </a>
                            

                        </div>
                    </ul>

                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar;