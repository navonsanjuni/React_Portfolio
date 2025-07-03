import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarBtn from './NavbarBtn'
import NavbarLinks from './NavbarLinks'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="maw-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
            <div className='flex justify-between w-full mx-auto max-w-[1200px] bg-black items-center rounded-r-full p-6 rounded-l-full border-[0.5px] border-orange '>
                <NavbarLogo />
                <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
               
            </div>
            <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
                 <button className='text-2xl p-3 border border-orange
                 rounded-full text-white' onClick={toggleMenu}>
                    <GiHamburgerMenu />
                 </button>
                 
            </div>

        </nav>
    )
}

export default NavbarMain