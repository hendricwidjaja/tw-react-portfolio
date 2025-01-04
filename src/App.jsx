import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


const App = () => {
  return (
    <div className="flex-col justify-center">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
