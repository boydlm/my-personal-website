
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavigationList from "./NavigationList";


const NavigationList = () => {
    const links=[
        {
            "name": "About",
            "url": "/#about"
        },
        {
            "name": "Projects",
            "url": "/#projects"
        },
        {
            "name": "Contact",
            "url": "/#contact"
        },
        {
            "name": "Resume",
            "url": "/#resume"
        },
        
    ]
    return (

        <ul className="flex flex-col">
            {links.map((item)=> (
                <li className="mt-5 cursor-pointer" key={item.name}>
                    <a href={(item.url)}>
                        {item.name}
                    </a>
                </li>
                ))
            }
        </ul>
    )
}

export default NavigationList;




const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
            <a href="/" className="logo text-2xl font-bold text-accent">
                lb.
            </a>


            {/* Desktop Nav */}
            <nav className={!toggle ? "hidden" : "hidden md:block"}>
                <NavigationList/>
            </nav>

            

            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav right-[-100%]" : "mobile-nav right-0"}
            >
                 <NavigationList/>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className="block">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
        </header>
    );
};

export default Header;
