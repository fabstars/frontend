import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../../auth";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="create-storefront-cta u-container">
        <div className="paddstorefront">
          <h2 className="create-storefront-cta__heading heading-2">
            Ready to create your own website?
          </h2>
          <p className="create-storefront-cta__note">
            Replace your linktree website with your own website and earn money
          </p>
        </div>
        <div className="create-storefront-cta__button-container">
          <section className="cta-input">
            <form className="cta-input__container">
              <div className="cta-input__qaya-name">
                <input
                  aria-label="Your requested name to be used for a fab store with the URL like https://your-name.co"
                  className="cta-input__input"
                  placeholder="your-name"
                  type="text"
                />
                <span aria-hidden="true">.co</span>
              </div>
              {!isAuthenticated() && (
                <Link className="button-72" to="/signup">
                  Start For Free
                </Link>
              )}
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
