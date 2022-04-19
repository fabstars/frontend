import React from "react";
import img from "./coming-soon.png";
import Menu from "../../Menu";

const CommingSoon = () => {
  return (
    <>
    <Menu defaultNav={true} />
    <body>
        <section class="coming-part">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="coming-content">
                            <h1 class="coming-title">coming soon...</h1>
                            {/* <div class="countdown coming-clock" data-countdown="2022/12/22">
                                <span class="countdown-time"><span>00</span><small>days</small></span><span class="countdown-time"><span>00</span><small>hours</small></span>
                                <span class="countdown-time"><span>00</span><small>minutes</small></span><span class="countdown-time"><span>00</span><small>seconds</small></span>
                            </div> */}
                            <h3 class="coming-subtitle">We are currently working on an awesome new update. Subscribe to our newsletter to stay updated.</h3>
                            <form class="coming-form">
                                <input type="text" placeholder="enter your email" />
                                <button>
                                    <i class="fas fa-solid fa-paper-plane"></i>
                                </button>
                            </form>
                            <div class="coming-social">
                                <a class="fab fa-facebook" href="#"></a>
                                <a class="fab fa-twitter" href="#"></a>
                                <a class="fab fa-linkedin" href="#"></a>
                                <a class="fab fa-instagram" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5"><img class="img-fluid" src={img} alt="coming-soon" /></div>
                </div>
            </div>
        </section>
        {/* <script src="vendor/bootstrap/jquery-1.12.4.min.js"></script>
        <script src="vendor/bootstrap/popper.min.js"></script>
        <script src="vendor/bootstrap/bootstrap.min.js"></script>
        <script src="vendor/countdown/countdown.min.js"></script>
        <script src="vendor/niceselect/nice-select.min.js"></script>
        <script src="vendor/slickslider/slick.min.js"></script>
        <script src="vendor/venobox/venobox.min.js"></script>
        <script src="js/nice-select.js"></script>
        <script src="js/countdown.js"></script>
        <script src="js/accordion.js"></script>
        <script src="js/venobox.js"></script>
        <script src="js/slick.js"></script>
        <script src="js/main.js"></script> */}
    </body>
    </>
  );
};

export default CommingSoon;
