import React from "react";
import Err from "./error.png";
import { Link } from "react-router-dom";
import "./styles.css";

const Error = () => {
  return (
    <div>
      <section class="error-part">
        <div class="container">
          <h1>404 | Not Found</h1>
          <img className="img-fluid" src={Err} alt="error" />
          <h3>ooopps! this page can't be found.</h3>
          <p>It looks like nothing was found at this location.</p>
        </div>
      </section>
    </div>
  );
};

export default Error;
