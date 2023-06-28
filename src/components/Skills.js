import React from "react";
import {
    FaReact, 
    FaPython, 
    AiOutlineHtml5, 
    FaCss3Alt, 
    SiTailwindcss,
    FaFlask,
    BiLogoJavascript,
    GrMysql,
    FaAws
} from "react-icons/ai";

const Skills = () => {
  return (
    <section className="bg-primary text-secondary px-5 py-28" id="skills">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="skills-info">
          <h2 className="text-4xl mb-5 border-b-[.5px] w-[180px] border-green-600 pb-2">
            Skills
          </h2>

          <p className="pb-5">
          My frontend skills include: React.js, HTML, CSS, JavaScript, and Tailwind CSS.
          My backend skills include Python, Flask, and mySQL.</p>
          
        </div>

        
      </div>
    </section>
  );
};

export default Skills;


