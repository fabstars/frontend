import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({ title, className, children, defaultNav }) => (
  <div>
    <Menu defaultNav={defaultNav} a={"a"} />
    <h1>{title}</h1>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
