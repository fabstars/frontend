import React, { useEffect, useState } from "react";
import HighlightedLinks from "./components/CreatorStore/HighlightedLinks";
import ProductList from "./components/CreatorStore/ProductList";
import "./components/CreatorStore/style.css";

const CreatorStore = ({ match }) => {
  return (
    <>
    <div className="bgcolor">
      <hr className="divider1" />
      <div className="main-banner-creator">
        <div className="store-heading">
          <h1>BluePine Labs</h1>
        </div>
        <div className="creator-social-profiles adjust-height">
          <a href="#" style={{"color": "#3b5998"}}><i className="fab fa-facebook"></i></a>
          <a href="#" style={{"color": "#e95950"}}><i className="fab fa-instagram"></i></a>
          <a href="#" style={{"color": "#00acee"}}><i className="fab fa-twitter"></i></a>
          <a href="#" style={{"color": "#FF0000"}}><i className="fab fa-youtube"></i></a>
          <a href="#" style={{"color": "#5663F7"}}><i className="fab fa-discord"></i></a>
          <a href="#" style={{"color": "#FF4500"}}><i className="fab fa-reddit"></i></a>
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
