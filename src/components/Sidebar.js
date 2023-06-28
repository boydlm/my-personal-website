import React, { useState } from "react";
import NavigationList from "./NavigationList";
import { Fade as Hamburger } from 'hamburger-react'


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="fixed z-30 flex items-center cursor-pointer right-10 top-6">
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>

            <div className={`top-0 right-0 fixed bg-gray-500 w-[40vw] h-full 
                    p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out
                    duration-700`}>
                <NavigationList />

            </div>
        </div>
    )
}   
