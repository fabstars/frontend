import React, { useEffect, useState } from "react";
import HighlightedLinks from "./components/CreatorStore/HighlightedLinks";
import ProductList from "./components/CreatorStore/ProductList";
import "./components/CreatorStore/style.css";

const CreatorStore = ({ match }) => {
  return (
    <>
    <div className="bgcolor">
      <div className="main-banner-creator">
        <hr className="divider1" />
        <div className="store-heading">
          <h1>HRITHIK ROSHAN</h1>
        </div>
        <div className="creator-social-profiles adjust-height">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-discord"></i>
          <i className="fab fa-reddit"></i>
        </div>
        <HighlightedLinks />
      </div>
      <hr className="divider2" />
      <ProductList userId={match.params.influencerId} />
    </div>
    </>
  );
};

export default CreatorStore;
