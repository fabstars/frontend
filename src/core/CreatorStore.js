import React, { useEffect, useState } from "react";
import HighlightedLinks from "./components/CreatorStore/HighlightedLinks";
import ProductList from "./components/CreatorStore/ProductList";
import "./components/CreatorStore/style.css";
import { getById, getByUsername } from "../user/apiUser";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import StoreFooter from "./components/CreatorStore/StoreFooter";

const CreatorStore = ({ match }) => {
  const [user, setUser] = useState(null);
  const init = (slug) => {
    getByUsername(slug).then((data) => {
      setUser(data);
    });
  };

  useEffect(() => {
    console.log(match.params.slug);
    console.log(user);
  }, [user]);

  useEffect(() => {
    init(match.params.slug);
  }, [match.params.slug]);
  const [cartActive, setCartActive] = useState(false);

  return (
    <div>
      <Link to={user && `/${user.slug}`} className="sitename">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1W6NYr7J2h-pxZVnhMGZ_0aIyHlSUn_Q7g&usqp=CAU"
          alt="Avatar"
          class="avatar"
        />
      </Link>
      <Link
        className="bttn"
        // to={{
        //   pathname: `/checkout`,
        //   state: {
        //     storeTitle: user && user.store_name,
        //     creatorStore: user && `/${user.slug}`,
        //   },
        // }}
        style={{ float: "right" }}
        onClick={() => {
          setCartActive(true);
        }}
      >
        <i class="fas fa-shopping-bag"></i>
      </Link>
      {user && (
        <div className="bgcolor">
          <div className=" ">
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
          <ProductList userId={user._id} user={user} />
          <StoreFooter />
        </div>
      )}
      <Cart
        cartActive={cartActive}
        setCartActive={setCartActive}
        creatorStore={user && `/${user.slug}`}
        storeTitle={user && user.store_name}
      />
    </div>
  );
};

export default CreatorStore;
