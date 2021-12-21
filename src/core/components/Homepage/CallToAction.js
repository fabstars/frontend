import React from "react";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="create-storefront-cta u-container">
        <h2 className="create-storefront-cta__heading heading-2">
          Ready to create your own website?
        </h2>
        <p className="create-storefront-cta__note">
          Replace link tree with your own website and earn money
        </p>
        <div className="create-storefront-cta__button-container">
          <section className="cta-input">
            <form className="cta-input__container">
              <div className="cta-input__qaya-name">
                <span aria-hidden="true">fab.store/</span>
                <input
                  aria-label="Your requested name to be used for a fab store with the URL like https://fab.store/your-name"
                  className="cta-input__input"
                  placeholder="your-name"
                  type="text"
                />
              </div>
              <button className="button cta-input__submit-button">Start</button>
            </form>
          </section>
        </div>
        <p className="create-storefront-cta__note">
          It's lifetime free & takes less than 30 seconds
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
