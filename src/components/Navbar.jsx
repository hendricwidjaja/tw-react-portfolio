import React from "react";
import { Navlinks } from "../constants";
import { TiThMenu } from "react-icons/ti";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="fixed z-10 w-full">
      <div className="bg-opacity-45 bg-white backdrop-blur-md border-b-4">
        {/* WIP Notification */}
        <div className="bg-red-600 text-center text-white py-2">
          <h2>🛠️ This website is under construction 👷</h2>
        </div>
        {/* Original Portfolio Notification */}
        <div className="bg-amber-400 text-center text-black py-2">
          <a href="https://hendric-widjaja.netlify.app/">
            Click Here to check out my original portfolio using HTML & CSS 👈
          </a>
        </div>
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-4">
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top smoothly
              window.history.pushState(null, "", "/#home"); // Updates the URL hash
              setOpen(false); // Close menu after clicking (if applicable)
            }}
            className="font-lacquer cursor-pointer mr-8 text-5xl hover:drop-shadow-custom-hov hover:scale-125 hover:rotate-6 duration-100"
          >
            :)
          </button>
          {/* Menu sections */}
          <ul className="flex items-center gap-8 hidden sm:inline-flex">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="py-4">
                <button
                  onClick={() => {
                    const section = document.getElementById(link);
                    if (section) {
                      const offset = 170; // to offset height of navbar
                      const sectionPosition =
                        section.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                      window.scrollTo({
                        top: sectionPosition,
                        behavior: "smooth",
                      });
                      window.history.pushState(null, "", `/#${link}`); // Update URL hash
                      setOpen(false); // Close menu after clicking
                    }
                  }}
                  className="font-lacquer inline-block text-lg hover:scale-110 duration-150"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile Hamburer Section */}
          <div className="sm:hidden" onClick={() => setOpen(!open)}>
            <TiThMenu className="text-4xl" />
          </div>
        </nav>
        {/* Mobile Sidebar Section */}
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
