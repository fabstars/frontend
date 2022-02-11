import React, { useState, useEffect } from "react";
import MainContent from "./components/CreatorDashboard/MainContent";
import Sidebar from "./components/CreatorDashboard/Sidebar";
import "./components/CreatorDashboard/style.css";

const CreatorDashboard = ({ location, history }) => {
  const [toggle, setToggle] = useState(false);
  const [currentTab, setCurrentTab] = useState("Profile");

  useEffect(() => {
    console.log("Location: ", location, " History: ", history);
  }, []);

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
