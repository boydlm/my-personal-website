import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavigationList from "./NavigationList";

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
