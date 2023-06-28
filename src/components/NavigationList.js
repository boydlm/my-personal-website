import React from "react";

const NavigationList = () => {
    const links=[
        {
            name: "About",
            url: "/#about"
        },
        {
            name: "Skills",
            url: "/#skills"
        },
        {
            name: "Projects",
            url: "/#projects"
        },
        {
            name: "Contact",
            url: "/#contact"
        },
        {
            name: "Resume",
            url: "/#resume"
        },
        
    ]
    return (

        <ul className="flex flex-col">
            {links.map((item)=> (
                <li className="mt-8 cursor-pointer font-extrabold text-xl" key={item.name}>
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



