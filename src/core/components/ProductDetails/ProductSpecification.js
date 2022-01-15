import React from "react";

const ProductSpecification = ({ activeTab, product, setActiveTab }) => {
  return (
    <section className="inner-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs">
              <li>
                <span
                  onClick={() => setActiveTab("Description")}
                  className="tab-link active"
                >
                  Descriptions
                </span>
              </li>
              <li>
                <span
                  className="tab-link"
                  onClick={() => setActiveTab("Specification")}
                >
                  Specifications
                </span>
              </li>
              {/* <li>
                <span
                  className="tab-link"
                  onClick={() => setActiveTab("Review")}
                >
                  reviews (2)
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div
          className={
            activeTab === "Description"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="tab-desc"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="product-details-frame">
                <div className="tab-descrip">
                  <p>{product && product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            activeTab === "Specification"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="tab-spec"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="product-details-frame">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">Product code</th>
                      <td>SKU: 101783</td>
                    </tr>
                    <tr>
                      <th scope="row">Weight</th>
                      <td>1kg, 2kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Styles</th>
                      <td>@Girly</td>
                    </tr>
                    <tr>
                      <th scope="row">Properties</th>
                      <td>Short Dress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={
            activeTab === "Review"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="tab-reve"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="product-details-frame">
                <ul className="review-list">
                  <li className="review-item">
                    <div className="review-media">
                      <div className="review-avatar">
                        <img src="images/avatar/01.jpg" alt="review" />
                      </div>
                      <h5 className="review-meta">
                        <div>miron mahmud</div>
                        <span>June 02, 2020</span>
                      </h5>
                    </div>
                    <ul className="review-rating">
                      <li className="icofont-ui-rating"></li>
                      <li className="icofont-ui-rating"></li>
                      <li className="icofont-ui-rating"></li>
                      <li className="icofont-ui-rating"></li>
                      <li className="icofont-ui-rate-blank"></li>
                    </ul>
                    <p className="review-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus hic amet qui velit, molestiae suscipit
                      perferendis, autem doloremque blanditiis dolores nulla
                      excepturi ea nobis!
                    </p>
                    <form className="review-reply">
                      <input type="text" placeholder="reply your thoughts" />
                      <button>
                        <i className="icofont-reply"></i>reply
                      </button>
                    </form>
                    <ul className="review-reply-list">
                      <li className="review-reply-item">
                        <div className="review-media">
                          <div className="review-avatar">
                            <img src="images/avatar/02.jpg" alt="review" />
                          </div>
                          <h5 className="review-meta">
                            <div>labonno khan</div>
                            <span>
                              <b>author -</b>June 02, 2020
                            </span>
                          </h5>
                        </div>
                        <p className="review-desc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus hic amet qui velit, molestiae suscipit
                          perferendis, autem doloremque blanditiis dolores nulla
                          excepturi ea nobis!
                        </p>
                        <form className="review-reply">
                          <input
                            type="text"
                            placeholder="reply your thoughts"
                          />
                          <button>
                            <i className="icofont-reply"></i>reply
                          </button>
                        </form>
                      </li>
                      <li className="review-reply-item">
                        <div className="review-media">
                          <div className="review-avatar">
                            <img src="images/avatar/03.jpg" alt="review" />
                          </div>
                          <h5 className="review-meta">
                            <div>tahmina bonny</div>
                            <span>June 02, 2020</span>
                          </h5>
                        </div>
                        <p className="review-desc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus hic amet qui velit, molestiae suscipit
                          perferendis, autem doloremque blanditiis dolores nulla
                          excepturi ea nobis!
                        </p>
                        <form className="review-reply">
                          <input
                            type="text"
                            placeholder="reply your thoughts"
                          />
                          <button>
                            <i className="icofont-reply"></i>reply
                          </button>
                        </form>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProductSpecification;
