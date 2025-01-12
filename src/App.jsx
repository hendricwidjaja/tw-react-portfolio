import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
    <div className="flex-col justify-center">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_50%_200px,#e6efff,transparent)]"></div></div>
      <Navbar />
      <Hero />
      <Testimonials />
    </div>
  );
};

export default App;
