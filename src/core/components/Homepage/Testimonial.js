import React from "react";
import user from "./img/user.png";
import endQuote from "./img/endQuote.svg";
const Review = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p className="p-codec p-testimonial">
          Fab store helps me in earning ₹ 30,000+/month and thus supports my
          passion of becoming a creator
        </p>
        <div className="author-container">
          <img
            src={user}
            loading="eager"
            alt="rahul sharma headshot
"
            className="author-headshot"
          />
          <div className="author-details">
            <div className="author-name">Rahul Sharma</div>
          </div>
        </div>
        <img
          src={endQuote}
          loading="eager"
          alt="end quote"
          className="end-quote"
        />
      </div>
    </div>
  );
};

export default Review;
