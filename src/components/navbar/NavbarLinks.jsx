import React from 'react'

const links = [
    { linkS: "About Me", section: "about" },
    { links: "Skills", section: "skills" },
    { links: "Experience", section: "experience" },
    { links: "Projects", section: "projects" },
    { links: "Blog", section: "blog" },
    { links: "Contact", section: "contact" },

]

const NavbarLinks = () => {
    return (
        <ul className='flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4'>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <a
                            href='#'
                            className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>
                            {link.links}
                        </a>
                        <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                    </li>
                );
            })}


        </ul>
    );
}


export default NavbarLinks