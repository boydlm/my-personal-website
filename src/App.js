import "./App.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Sidebar from "./components/Sidebar";

export default function App() {

  return (
    <div>
    <Header />
    <Hero />
    <About />
    <Sidebar />
    </div>
    
  );
}

