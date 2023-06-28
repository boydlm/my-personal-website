import React from "react";

const About = () => {
  return (

    <section className="bg-primary px-5" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl mb-5 border-b-[.5px] w-[180px] border-green-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi there. 
          </p>
          <p className="pb-5">
            I'm currently studying computer science and art history at Boston College. I'm passionate about
            combining my skills in art, design, and technology to create accessible and innovative web applications. 
            </p>

          <p>
            In my spare time I love to fiddle with Procreate, read (my favorite book is Gabriel García Márquez's <i>One Hundred Years of Solitude</i>), and try viral Tik Tok recipes (you can't go wrong with <a href="https://thepounddropper.com/viral-tiktok-salmon-and-rice-bowl" target="_blank"> this </a> 
            salmon and rice bowl recipe!)
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;