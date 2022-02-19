import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HighlightedLinks = ({ links }) => {
  useEffect(() => {
    console.log(links);
  }, [links]);
  return (
    <>
      {links &&
        links.length > 0 &&
        links.map((link, idx) => (
          <div style={{ padding: "0px 10px 0px 10px" }}>
            <div className="text-center mt-3">
              <Link
                onClick={() => {
                  const myUrl = link.url.includes("http")
                    ? link.url
                    : "http://" + link.url;
                  window.open(myUrl);
                }}
                className="button-24"
                style={{ "font-weight": "900" }}
              >
                {link.text}
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default HighlightedLinks;
