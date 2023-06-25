import React, { useState } from "react";
import NavigationList from "./NavigationList";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {!isOpen ?
                (
                    <button className = "fixed z-30 flex items-center cursor-pointer right-10 top-6" onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu/> 
                    </button>
                ) :
                (
                    <button class="text-xl text-white fixed top-4 right-4 z-10" onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineClose/>
                    </button>

                )
            }
            <div className={`top-0 right-0 fixed bg-green-500 w-[35vw] h-full 
                    p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out
                    duration-300`}>

                    <NavigationList/>
            </div>
        </div>
    )
}   
