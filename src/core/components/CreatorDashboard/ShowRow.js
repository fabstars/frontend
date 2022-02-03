import React, { useState, useEffect } from "react";
import {
  getInfluencerProducts,
  updateMargin,
  removInfluencerProducts,
} from "../../apiCore";
import { isAuthenticated } from "../../../auth";
import { Modal, Button, Form } from "react-bootstrap";
import { useAlert } from "react-alert";

function MyVerticallyCenteredModal(props) {
  const alert = useAlert();
  const [margin, setMargin] = useState(0);
  const handleMarginSubmit = (e) => {
    e.preventDefault();
    updateMargin(
      isAuthenticated().token,
      props.userId,
      props.product._id,
      margin
    ).then((data) => {
      alert.show("Margin updated");
    });
  };
  const handleChange = (e) => {
    setMargin(e.target.value);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update margin for {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label className="text-muted">Margin</label>
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              value={margin}
            />
          </div>
          <Button style={{ marginLeft: "5px" }} onClick={handleMarginSubmit}>
            Update
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ShowRow = ({ product, i, products }) => {
  const {
    token,
    user: { _id },
  } = isAuthenticated();
  const [modalShow, setModalShow] = useState(false);

  const removeFromSite = (idx) => {
    if (products && products[0]) {
      const products_to_send = [products[0][idx]._id];
      removInfluencerProducts(
        _id,
        isAuthenticated().token,
        products_to_send
      ).then((data) => {
        alert.show("Product removed from site");
      });
    }
  };

  const getMargin = (product) => {
    {
      product.influencer_list.map((influencer, idx) => {
        if (influencer.user_id === _id) {
          product["margin"] = influencer.margin;
        }
      });
    }
  };
  return (
    <tr className=" ">
      <td>{product.name}</td>
      <td className="text-center">
        <i className="fas fa-rupee-sign"></i> {product.price}
      </td>
      <td className="text-center">
        <i className="fas fa-rupee-sign"></i>
        {getMargin(product)} {product["margin"]}
      </td>
      <td className="text-center">
        <button
          className="btn btn-success"
          onClick={() => setModalShow(!modalShow)}
          style={{
            paddingRight: "5px",
            paddingLeft: "5px",
            lineHeight: "20px",
            margin: "0px",
            fontSize: "10px",
          }}
        >
          Update
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={product}
          userId={_id}
        />
      </td>
      <td className="text-center">
        <button
          className="btn btn-danger"
          onClick={() => removeFromSite(i)}
          style={{
            paddingRight: "5px",
            paddingLeft: "5px",
            lineHeight: "20px",
            margin: "0px",
            fontSize: "10px",
          }}
        >
          remove
        </button>
      </td>
    </tr>
  );
};

export default ShowRow;