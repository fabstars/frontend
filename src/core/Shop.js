import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts, list } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";
import Search from "../core/Search";
import { isAuthenticated } from "../auth";
import SingleShopProduct from "./components/Shop/SingleShopProduct";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [], search: "" },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(24);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-success mb-5">
          Load more
        </button>
      )
    );
  };

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };
  const [clearCategoryFilter, setClearCategoryFilter] = useState(false);

  const text = useRef("");
  const [filteredCategory, setFilteredCategory] = useState(null);
  const onChange = (e) => {
    if (text.current.value !== "") {
      let filtered;
      if (!filteredCategory)
        filtered = categories.filter((category) => {
          return category.name
            .toLowerCase()
            .includes(text.current.value.toLowerCase());
        });
      else
        filtered = filteredCategory.filter((category) => {
          return category.name
            .toLowerCase()
            .includes(text.current.value.toLowerCase());
        });
      setFilteredCategory(filtered);
    } else {
      setFilteredCategory(null);
    }
  };
  return (
    <Layout className="container-fluid" jumbotron={false}>
      <section className="inner-section shop-part mt-3">
        <p
          style={{
            textAlign: "center",
            color: "var(--orange)",
            marginBottom: "1rem",
          }}
        >
          Click on “Add to Site” button of your relevant product and it will be
          automatically added to your website. You can update Margin in Manage
          Products section of Dashboard.
        </p>
        <div className="row content-reverse">
          <div className="col-lg-3 col-sm-12">
            <div className="shop-widget">
              <h6 className="shop-widget-title">Filter by Category</h6>
              <>
                <input
                  className="shop-widget-search"
                  ref={text}
                  type="text"
                  onChange={onChange}
                  placeholder="Search..."
                />
                <ul className="shop-widget-list shop-widget-scroll">
                  <Checkbox
                    categories={
                      filteredCategory ? filteredCategory : categories
                    }
                    handleFilters={(filters) =>
                      handleFilters(filters, "category")
                    }
                    clearCategoryFilter={clearCategoryFilter}
                    setClearCategoryFilter={setClearCategoryFilter}
                  />
                </ul>
                <button
                  className="shop-widget-btn"
                  onClick={() => {
                    setCategories([]);
                    window.location.reload();
                    setClearCategoryFilter(true);
                    setCategories(categories);
                  }}
                >
                  <i className="far fa-trash-alt"></i>
                  <span>clear filter</span>
                </button>
              </>
            </div>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div className="row">
              <div className="top-filter">
                <div className="filter-short">
                  <input
                    className="shop-widget-search"
                    type="text"
                    style={{
                      border: "1px solid #1494a9",
                      color: "#1494a9",
                      background: "white",
                    }}
                    value={myFilters.filters.search}
                    onChange={(e) => handleFilters(e.target.value, "search")}
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div className="row  ">
              {filteredResults.map((product, i) => (
                <>
                  {isAuthenticated() && isAuthenticated().user.role === "1" ? (
                    <SingleShopProduct
                      product={product}
                      showAddToSiteButton={true}
                    />
                  ) : (
                    <SingleShopProduct product={product} />
                  )}
                </>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="bottom-paginate">{loadMoreButton()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
