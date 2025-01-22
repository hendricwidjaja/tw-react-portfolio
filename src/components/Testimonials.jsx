import React from "react";
import user from "../assets/heading-icons/user-check-solid.svg";
import quotes from "../assets/testimonials/quote-left-solid.svg";
import { REVIEWS } from "../constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="flex-col justify-center pt-6 pb-16 border-b">
      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center gap-3"
      >
        <h2 className="font-lacquer font-bold text-4xl">Testimonials</h2>
        <img className="size-11" src={user} alt="user-icon"></img>
      </motion.section>
      <div className="flex justify-center">
        <section className="grid grid-cols-1 lg:grid-cols-3 max-w-5xl w-10/12 pt-6 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.article
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8 }}
              key={index}
              className={`
                p-6 
                border-black 
                border-2
                rounded-2xl
                duration-200
                drop-shadow-custom
                ${
                  index % 2 === 0
                    ? "hover:drop-shadow-oddYellow"
                    : "hover:drop-shadow-evenBlue"
                }
                even:bg-evenBlue 
                odd:bg-oddYellow 
                first-of-type:bg-firstBlue 
                first-of-type:text-white 
                first-of-type:hover:drop-shadow-firstBlue
                last-of-type:bg-lastBlue 
                last-of-type:text-white
                last-of-type:hover:drop-shadow-lastBlue
                ${
                  index === 0 || index === REVIEWS.length - 1
                    ? "lg:col-span-2"
                    : ""
                }
            `}
            >
              <div className="flex justify-between">
                <div
                  id="reviewer-details"
                  className="flex place-items-center gap-2 mb-4"
                >
                  <img
                    className="h-16 rounded-full border-2 border-black"
                    src={review.picture}
                    alt={`Picture of ${review.name}`}
                  ></img>
                  <div className="reviewer-name-container">
                    <h1 className="font-bold text-xl">{review.name}</h1>
                    <p>{review.title}</p>
                  </div>
                </div>
                {/* Conditionally render and rotate the quote image for the last article */}
                {(index === 0 || index === REVIEWS.length - 1) && (
                  <img
                    className={`sm:size-16 size-0 ${
                      index === REVIEWS.length - 1 ? "rotate-180" : ""
                    }`}
                    src={quotes}
                    alt="quotes-icon"
                  />
                )}
              </div>
              <h3 className="font-bold mb-4">{review.highlight}</h3>
              <p>{review.review}</p>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
