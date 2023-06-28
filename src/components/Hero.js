import React from "react";

import {
    AiOutlineGithub,
    AiOutlineLinkedin,
  } from "react-icons/ai";
  
  const Hero = () => {
    return (
      <section className="bg-primary px-5 text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4xl lg:text-6xl">
              Hi, <br />I'm <span className="text-accent text-shadow shadow-yellow-600">Leah</span> <br />
            </h1>
  
            <p className="py-5">
              I'm interested in full stack and cloud development. 
            </p>
            <p>Find me on LinkedIn and Github:</p>
  
            <div className="flex py-5 hover: text-white">
              <a
                href="https://github.com/boydlm"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                {" "}
                <AiOutlineGithub size={40} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/leah-boyd-3120651b5/"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                {" "}
                <AiOutlineLinkedin size={40} />{" "}
              </a>
            </div>
          </div>
  
          
        </div>
      </section>
    );
  };
  
  export default Hero;
  

