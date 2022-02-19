import React, { useEffect, useState } from "react";
import HighlightedLinks from "./components/CreatorStore/HighlightedLinks";
import ProductList from "./components/CreatorStore/ProductList";
import "./components/CreatorStore/style.css";
import { getById, getByUsername } from "../user/apiUser";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import StoreFooter from "./components/CreatorStore/StoreFooter";
import PageNotFound from "./components/ErrorPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
  }, [match.params.slug, user]);

  useEffect(() => {
    init(match.params.slug);
  }, [match.params.slug]);
  const [cartActive, setCartActive] = useState(false);

  return (
    <>
      {user ? (
        <>
          {user.hasOwnProperty("_id") ? (
            <div>
              <>
                <Link className="bttn" style={{ cursor: "initial" }}></Link>
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
                  <i class="fas fa-solid fa-bags-shopping"></i>
                </Link>
              </>

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
                            onClick={() => {
                              const myUrl = user.social.facebook.includes(
                                "http"
                              )
                                ? user.social.facebook
                                : "http://" + user.social.facebook;
                              window.open(myUrl);
                            }}
                            style={{ color: "#3b5998" }}
                          >
                            <i className="fab fa-facebook"></i>
                          </Link>
                        )}
                      {user.social &&
                        user.social.instagram &&
                        user.social.instagram.length && (
                          <Link
                            onClick={() => {
                              const myUrl = user.social.instagram.includes(
                                "http"
                              )
                                ? user.social.instagram
                                : "http://" + user.social.instagram;
                              window.open(myUrl);
                            }}
                            style={{ color: "#e95950" }}
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        )}

                      {user.social &&
                        user.social.twitter &&
                        user.social.twitter.length && (
                          <Link
                            onClick={() => {
                              const myUrl = user.social.twitter.includes("http")
                                ? user.social.twitter
                                : "http://" + user.social.twitter;
                              window.open(myUrl);
                            }}
                            style={{ color: "#00acee" }}
                          >
                            <i className="fab fa-twitter"></i>
                          </Link>
                        )}
                      {user.social &&
                        user.social.linkedin &&
                        user.social.linkedin.length && (
                          <Link
                            onClick={() => {
                              const myUrl = user.social.linkedin.includes(
                                "http"
                              )
                                ? user.social.linkedin
                                : "http://" + user.social.linkedin;
                              window.open(myUrl);
                            }}
                            style={{ color: "#5663F7" }}
                          >
                            <i className="fab fa-linkedin"></i>
                          </Link>
                        )}

                      {user.social &&
                        user.social.youtube &&
                        user.social.youtube.length && (
                          <Link
                            onClick={() => {
                              const myUrl = user.social.youtube.includes("http")
                                ? user.social.youtube
                                : "http://" + user.social.youtube;
                              window.open(myUrl);
                            }}
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
          ) : (
            <PageNotFound />
          )}
        </>
      ) : (
        <>
          <div style={{ textAlign: "center" }}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              style={{ marginTop: "10rem" }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CreatorStore;
