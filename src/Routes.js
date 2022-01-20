import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import LandingPage from "./core/LandingPage";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/updateCategory";
import CreatorStore from "./core/CreatorStore";
import CreatorDashboard from "./core/CreatorDashboard";
import InfluencerProducts from "./core/components/InfluenerProducts";
import About from "./core/components/AboutUs";
import Contact from "./core/components/ContactUs";
import ProductDetails from "./core/components/ProductDetails/ProductDetails";
import ReturnPolicy from "./core/components/AdditionalPages/ReturnPolicy";
import PrivacyPolicy from "./core/components/AdditionalPages/Privacy"
import Terms from "./core/components/AdditionalPages/Terms";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/ReturnPolicy" exact component={ReturnPolicy} />
        <Route path="/PrivacyPolicy" exact component={PrivacyPolicy} />
        <Route path="/Terms" exact component={Terms} />
        <Route
          path="/creatorstore/:influencerId"
          exact
          component={CreatorStore}
        />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />

        <Route path="/creator/dashboard" exact component={CreatorDashboard} />
        <Route path="/user/my-products" exact component={InfluencerProducts} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/products/:productId" exact component={ProductDetails} />
        <Route path="/cart" exact component={Cart} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <PrivateRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
