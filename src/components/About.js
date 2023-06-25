import React from "react";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[.5px] w-[180px] border-green-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name is Leah Boyd. 
          </p>
          <p className="pb-5">
            My Frontend skills include React.js, HTML, CSS, and Tailwind CSS.
          </p>

          <p>In backend I know Python, Flask, Java, and mySQL.</p>

          <p>
            In my spare time I love to fiddle around with Procreate, read, and cook amazing food.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default About;