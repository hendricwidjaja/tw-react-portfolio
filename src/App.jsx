import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import "./index.css";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_50%_200px,#e6efff,transparent)]"></div>
      </div>
      <div className="flex-col">
        <Navbar />
        <Hero />
        <Testimonials />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
