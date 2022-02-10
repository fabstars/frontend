import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import { getCartStatus } from "./cartHelpers";

const UserNavbar = () => {
  const [cartActive, setCartActive] = useState(getCartStatus());
  const location = useLocation();
  const [creatorStore, setCreatorStore] = useState("#");
  const [storeTitle, setStoreTitle] = useState("");
  useEffect(() => {
    if (location && location.state && location.state.creatorStore)
      setCreatorStore(location.state.creatorStore);
    if (location && location.state && location.state.storeTitle)
      setStoreTitle(location.state.storeTitle);
  }, []);
  return (
    <>
      <div className="header-part mb-3">
        <div className="container">
          <div className="header-content">
            <Link
              to={creatorStore}
              className="header-logo"
              style={{ textDecoration: "None" }}
            >
              <i className="fas fa-store"></i> {storeTitle}
            </Link>
            <button
              className="header-widget header-cart"
              title="Cartlist"
              style={{ float: "right" }}
              onClick={() => setCartActive(true)}
            >
              <i className="fas fa-bags-shopping"></i>
            </button>
          </div>
        </div>
      </div>
      <Cart
        cartActive={cartActive}
        setCartActive={setCartActive}
        creatorStore={creatorStore}
        storeTitle={storeTitle}
      />
    </>
  );
};

export default UserNavbar;
