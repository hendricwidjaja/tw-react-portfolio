import { motion, AnimatePresence } from "framer-motion";
import { Navlinks } from "../constants";
import React, { useEffect } from "react";

const ResponsiveMenu = ({ open, setOpen }) => {
  // Close menu on resize above 640px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden absolute top-48 left-0 w-full h-screen z-20"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative z-20 text-xl font-semibold bg-black text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {Navlinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <button
                      className="font-lacquer inline-block text-lg hover:scale-110 duration-150"
                      onClick={() => {
                        const section = document.getElementById(link);
                        if (section) {
                          const offset = 160; // Adjust based on your navbar height
                          const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
                          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
                          window.history.pushState(null, "", `/#${link}`); // Update URL hash
                          setOpen(false); // Close menu after clicking
                        }
                      }}
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
