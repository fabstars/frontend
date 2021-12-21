import React from "react";
import user from "./img/user.png";
import endQuote from "./img/endQuote.svg";
const AdditionalDetails = () => {
  return (
    <div className="additional-details container">
      <div className="feature-section--two">
        <div className="feature-section__text">
          <span>
            Your Brand. <br />
            Your Website.
            <br /> Your Audience.
          </span>
        </div>
        <div className="feature-section__text">
          <p>
            We will connect your website to instagram shop, Youtube store,
            Google search and Google shooping
          </p>
        </div>
        <div className="feature-section__text">
          <p>
            Not only this we will also run your website ads on instagram to
            retarget your website visitors
          </p>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonial-content">
          <p className="p-codec p-testimonial">
            I don't have to worry about my creator business Fab handles
            everything from logistics, payments to technology and send's money
            instantly. Love you Fab!!
          </p>
          <div className="author-container">
            <img
              src={user}
              loading="eager"
              alt="Aakash gupta headshot
"
              className="author-headshot"
            />
            <div className="author-details">
              <div className="author-name">Aakash Gupta</div>
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
    </div>
  );
};

export default AdditionalDetails;
