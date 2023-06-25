import "./App.css";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Sidebar from "./components/Sidebar";

export default function App() {

  return (
    <div>
    <Hero />
    <About />
    <Sidebar />
    </div>
    
  );
}

