import React from "react";
import user from "../assets/heading-icons/user-check-solid.svg";
import quotes from "../assets/testimonials/quote-left-solid.svg";
import { REVIEWS } from "../constants";

const Testimonials = () => {
  return (
    <div className="flex-col place-items-center justify-center pt-10">
      <section className="flex place-items-center gap-3">
        <h2 className="font-lacquer font-bold text-3xl">Testimonials</h2>
        <img className="size-11" src={user} alt="user-icon"></img>
      </section>
      <section className="grid auto-rows-auto max-w-5xl w-10/12 pt-6 gap-4">
        {REVIEWS.map((review, index) => (
          <article
            key={index}
            className={`
                p-6 
                border-black 
                border-2
                rounded-2xl
                hover:scale-105 
                duration-200
                drop-shadow-custom
                even:bg-evenBlue 
                odd:bg-oddYellow 
                first-of-type:bg-firstBlue 
                first-of-type:text-white 
                last-of-type:bg-lastBlue 
                last-of-type:text-white
            `}
          >
            <div className="flex place-items-center gap-2">
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
            <h3 className="font-bold">{review.highlight}</h3>
            <p>{review.review}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
