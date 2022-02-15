import React, { useState, useEffect } from "react";
import {
  getInfluencerProducts,
  updateMargin,
  removInfluencerProducts,
} from "../../apiCore";
import { isAuthenticated } from "../../../auth";
import { Modal, Button, Form } from "react-bootstrap";
import { useAlert } from "react-alert";
import { toast } from "react-toastify";

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
      toast.success("Margin updated");
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
  const [margin, setMargin] = useState(0);
  const alert = useAlert();

  const handleMarginSubmit = (e, product) => {
    e.preventDefault();
    updateMargin(
      isAuthenticated().token,
      isAuthenticated().user._id,
      product._id,
      margin
    ).then((data) => {
      toast.success("Margin updated");
    });
  };
  const handleChange = (e) => {
    setMargin(e.target.value);
  };
  const removeFromSite = (idx) => {
    if (products && products[0]) {
      const products_to_send = [products[0][idx]._id];
      removInfluencerProducts(
        _id,
        isAuthenticated().token,
        products_to_send
      ).then((data) => {
        toast.success("Product removed from site");
      });
    }
  };

  useEffect(() => {
    if (product)
      product.influencer_list.map((influencer, idx) => {
        if (influencer.user_id === _id) {
          setMargin(influencer.margin);
        }
      });
  }, [product]);
  return (
    <tr className=" ">
      <td>{product.name}</td>
      <td className="text-center">
        <i className="fas fa-rupee-sign"></i>{" "}
        {Number(product.price) + Number(margin)} ({product.mrp})
      </td>
      <td className="text-center">
        <i className="fas fa-rupee-sign"></i>
        <input
          type="number"
          style={{ width: "80px" }}
          value={margin}
          onChange={(e) => {
            if (Number(e.target.value) + product.price < product.mrp)
              handleChange(e);
            else toast.error("Product price cannot exceed MRP");
          }}
        />
        <button
          className="btn btn-success"
          onClick={(e) => handleMarginSubmit(e, product)}
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
