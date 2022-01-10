import React, { useState } from "react";
import MainContent from "./components/CreatorDashboard/MainContent";
import Sidebar from "./components/CreatorDashboard/Sidebar";
import "./components/CreatorDashboard/style.css";

const CreatorDashboard = () => {
  const [toggle, setToggle] = useState(false);
  const [currentTab, setCurrentTab] = useState("Profile");

  return (
    <div id="wrapper ">
      <Sidebar
        toggle={toggle}
        setToggle={setToggle}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <MainContent toggle={toggle} currentTab={currentTab} />
    </div>
  );
};

export default CreatorDashboard;
