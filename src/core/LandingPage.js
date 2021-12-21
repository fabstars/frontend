import React from "react";
import AboutProducts from "./components/Homepage/AboutProducts";
import HomepageBanner from "./components/Homepage/HomepageBanner";
import LaunchingSteps from "./components/Homepage/LaunchingSteps";
import Testimonial from "./components/Homepage/Testimonial";

const LandingPage = () => {
  return (
    <>
      <HomepageBanner />
      <LaunchingSteps />
      <Testimonial />
      <AboutProducts />
    </>
  );
};

export default LandingPage;
