import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getInfluencerProducts } from "../core/apiCore";
import { getPurchaseHistory } from "./apiUser";
import moment from "moment";
import SingleProduct from "../core/components/CreatorStore/SingleProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import Menu from "../core/Menu";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Dashboard = () => {
  const [modalShow, setModalShow] = useState(false);

  const [history, setHistory] = useState([]);
  const [products, setProducts] = useState([]);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
    getInfluencerProducts(userId, token).then((data) => {
      console.log(products);
      setProducts((arr) => [...arr, data]);
      console.log(products);
    });
  };

  useEffect(() => {
    console.log(products[0]);
  }, [products]);
  useEffect(() => {
    init(_id, token);
  }, []);

  const customerLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={`/profile/${_id}`}>
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const influencerLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to={`/creatorStore/${_id}`}>
              My Store
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={`/profile/${_id}`}>
              Update Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" onClick={() => setModalShow(true)}>
              Highlight Link
            </Link>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === "0" ? "Admin" : role === "1" ? "Influencer" : "Customer"}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = (history) => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {history.map((h, i) => {
              return (
                <div>
                  <hr />
                  {h.products.map((p, i) => {
                    return (
                      <div key={i}>
                        <h6>Product name: {p.name}</h6>
                        <h6>Product price: ${p.price}</h6>
                        <h6>Purchased date: {moment(p.createdAt).fromNow()}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };

  const influencerProducts = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Influencer Products</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {products.length &&
              products[0].length &&
              products[0].map((p, i) => {
                return (
                  <div>
                    <hr />
                    <SingleProduct product={p} margin={true} />
                  </div>
                );
              })}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <Menu defaultNav={true} />
      <div className="row">
        <div className="col-3">
          {role === "1" ? influencerLinks() : customerLinks()}
        </div>
        <div className="col-9">
          {userInfo()}
          {/* {role === "1" ? influencerProducts() : purchaseHistory(history)} */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
