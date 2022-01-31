import React, { useEffect, useState } from "react";
import HighlightedLinks from "./components/CreatorStore/HighlightedLinks";
import ProductList from "./components/CreatorStore/ProductList";
import "./components/CreatorStore/style.css";
import { getById } from "../user/apiUser";
import { Link } from "react-router-dom";

const CreatorStore = ({ match }) => {
  const [user, setUser] = useState(null);
  const init = (id) => {
    getById(id).then((data) => {
      setUser(data);
    });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    init(match.params.influencerId);
  }, [match.params.influencerId]);

  return (
    <div>
      <header
        className="header-style hcontainer"
        style={{
          position: "sticky",
          "background-color": "transparent",
          "box-shadow": "0 8px 8px 2.5px rgba(0,0,0,0)",
        }}
      >
        <Link to="/" className="sitename">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1W6NYr7J2h-pxZVnhMGZ_0aIyHlSUn_Q7g&usqp=CAU"
            alt="Avatar"
            class="avatar"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link className="bttn" to="/checkout">
                <i class="fas fa-shopping-bag"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {user && (
        <div className="bgcolor">
          <hr className="divider1" />
          <div className="main-banner-creator">
            <div className="store-heading">
              <h1>{user.store_name}</h1>
            </div>
            <div className="creator-social-profiles adjust-height">
              {user.social &&
                user.social.facebook &&
                user.social.facebook.length && (
                  <Link
                    onClick={() => window.open(user.social.facebook)}
                    style={{ color: "#3b5998" }}
                  >
                    <i className="fab fa-facebook"></i>
                  </Link>
                )}
              {user.social &&
                user.social.instagram &&
                user.social.instagram.length && (
                  <Link
                    onClick={() => window.open(user.social.instagram)}
                    style={{ color: "#e95950" }}
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                )}

              {user.social &&
                user.social.twitter &&
                user.social.twitter.length && (
                  <Link
                    onClick={() => window.open(user.social.twitter)}
                    style={{ color: "#00acee" }}
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                )}
              {user.social &&
                user.social.linkedin &&
                user.social.linkedin.length && (
                  <Link
                    onClick={() => window.open(user.social.linkedin)}
                    style={{ color: "#5663F7" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </Link>
                )}

              {user.social &&
                user.social.youtube &&
                user.social.youtube.length && (
                  <Link
                    onClick={() => window.open(user.social.youtube)}
                    style={{ color: "#FF0000" }}
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                )}
            </div>
            <HighlightedLinks links={user.highlightLinks} />
          </div>
          <hr className="divider2" />
          <ProductList userId={match.params.influencerId} />
        </div>
      )}
    </div>
  );
};

export default CreatorStore;
