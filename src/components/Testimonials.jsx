import React from "react";
import user from "../assets/heading-icons/user-check-solid.svg";
import { REVIEWS } from "../constants";
import reviewer1 from "../assets/testimonials/reviewer1.jpg";

const Testimonials = () => {
  return (
    <div className="flex-col place-items-center justify-center pt-10">
      <section className="flex place-items-center gap-3">
        <h2 className="font-lacquer text-3xl">Testimonials</h2>
        <img className="size-11" src={user} alt="user-icon"></img>
      </section>
      <section className="grid gap-4">
        {REVIEWS.map((review, index) => (
          <article
            key={index}
            className="p-4 
                even:bg-evenBlue 
                odd:bg-oddYellow 
                first-of-type:bg-firstBlue 
                last-of-type:bg-lastBlue 
                first-of-type:text-white 
                last-of-type:text-white"
          >
            <div className="flex place-items-center gap-2">
              <img className="h-16 rounded-full border-2 border-black" src={review.picture}></img>
              <div className="reviewer-name-container">
                <h1 className="font-bold">{review.name}</h1>
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
