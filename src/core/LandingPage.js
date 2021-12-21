import React from "react";
import AboutProducts from "./components/Homepage/AboutProducts";
import AdditionalDetails from "./components/Homepage/AdditionalDetails";
import CallToAction from "./components/Homepage/CallToAction";
import Footer from "./components/Homepage/Footer";
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
      <AdditionalDetails />
      <CallToAction />
      <Footer />
    </>
  );
};

export default LandingPage;
