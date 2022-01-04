import React, { useEffect, useState } from "react";
import HighlightedLinks from "./components/CreatorStore/HighlightedLinks";
import ProductList from "./components/CreatorStore/ProductList";
import "./components/CreatorStore/style.css";

const CreatorStore = ({ match }) => {
  return (
    <>
      <div className="store-heading">
        <h1>HRITHIK ROSHAN</h1>
      </div>
      <div className="creator-social-profiles">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-discord"></i>
        <i className="fab fa-reddit"></i>
      </div>
      <HighlightedLinks />
      <ProductList userId={match.params.influencerId} />
    </>
  );
};

export default CreatorStore;
