import React from "react";
import { Link } from "react-router-dom";

const StoreFooter = () => {
  return (
    <section class="intro-part" style={{ paddingBottom: "10px" }}>
      <div class="container">
        <div class="row intro-content">
          <div class="col-sm-6 mb-5 col-lg-4">
            <div class="intro-wrap">
              <div class="intro-icon">
                <i class="fas fa-sync-alt"></i>
              </div>
              <div class="intro-content">
                <h5>14 days return policy</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-5 col-lg-4">
            <div class="intro-wrap">
              <div class="intro-icon">
                <i class="fad fa-wallet"></i>
              </div>
              <div class="intro-content">
                <h5>Cash on Delivery Available</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-5 col-lg-4">
            <div class="intro-wrap">
              <div class="intro-icon">
                <i class="fas fa-truck"></i>
              </div>
              <div class="intro-content">
                <h5>Free Shipping</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-5 col-lg-4">
            <div class="intro-wrap">
              <div class="intro-icon">
                <i class="fas fa-badge-check"></i>
              </div>
              <div class="intro-content">
                <h5>100% Tested Best Quality</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-5 col-lg-4">
            <div class="intro-wrap">
              <div class="intro-icon">
                <i class="fas fa-headset"></i>
              </div>
              <div class="intro-content">
                <h5>24/7 Support System</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-5 col-lg-4">
            <div class="intro-wrap">
              <div class="intro-icon">
                <i class="fas fa-lock"></i>
              </div>
              <div class="intro-content">
                <h5>100% Payment protection</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer u-container">
        <div className="footer__links">
          <Link
            className="footer__link"
            href=""
            to="/PrivacyPolicy"
            target="_top"
            style={{ fontSize: "20px",color:"var(--success)" }}
          >
            Privacy
          </Link>
          <Link
            className="footer__link"
            href=""
            to="/ReturnPolicy"
            target="_top"
            style={{ fontSize: "20px",color:"var(--success)" }}
          >
            Return Policy
          </Link>
          <Link
            className="footer__link"
            href=""
            to="/Terms"
            target="_top"
            style={{ fontSize: "20px",color:"var(--success)" }}
          >
            Terms of Service
          </Link>
        </div>
        <div className="mob-footer">
          <div
            style={{ display: "flex", justifyContent: "left", width: "100%" }}
          >
            <p className="footer-logo" style={{ fontSize: "15px" }}>
              Fabpreneurs Internet Pvt Ltd. All rights reserved, &copy; 2022
            </p>
          </div>

          <div className="made-in-section">
            <div>
              <span>Made in </span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIxOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI3IDE4Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGOTMiIGQ9Ik0yNyAuMDQ4SDB2MTcuMDZoMjdWLjA0OHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcgNS43NjNIMHY1LjcxNWgyN1Y1Ljc2M3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMTI4ODA3IiBkPSJNMjcgMTEuMzkzSDB2NS43MTVoMjd2LTUuNzE1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDgiIGQ9Ik0xMy41IDEwLjg4M2MxLjM0MiAwIDIuNDMtMS4wMzIgMi40My0yLjMwNCAwLTEuMjczLTEuMDg4LTIuMzA0LTIuNDMtMi4zMDRzLTIuNDMgMS4wMzEtMi40MyAyLjMwNGMwIDEuMjcyIDEuMDg4IDIuMzA0IDIuNDMgMi4zMDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjUgMTAuNTQzYzEuMTQzIDAgMi4wNy0uODggMi4wNy0xLjk2NHMtLjkyNy0xLjk2My0yLjA3LTEuOTYzYy0xLjE0MyAwLTIuMDcuODc5LTIuMDcgMS45NjMgMCAxLjA4NS45MjcgMS45NjQgMi4wNyAxLjk2NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA4IiBkPSJNMTMuNSA5LjAwNWMuMjQ5IDAgLjQ1LS4xOTEuNDUtLjQyN3MtLjIwMS0uNDI3LS40NS0uNDI3Yy0uMjQ4IDAtLjQ1LjE5MS0uNDUuNDI3cy4yMDEuNDI3LjQ1LjQyN3pNMTUuNTcgOC43NDljLjA5IDAgLjA5LjA4NS4wOS4wODUgMCAuMDg1LS4wOS4wODUtLjA5LjA4NS0uMDkgMC0uMDktLjA4NS0uMDktLjA4NSAwLS4wODUuMDktLjA4NS4wOS0uMDg1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDgiIGQ9Ik0xMy41IDEwLjU0MWwuMDktMS4xOTUtLjA5LS41MTItLjA5LjU5OC4wOSAxLjExek0xNS40OCA5LjI2Yy4wOSAwIC4wOS4wODYuMDkuMTcxIDAgLjA4NS0uMDkuMDg1LS4xOC4wODVzLS4wOS0uMDg1LS4wOS0uMTdjLjA5LS4wODYuMDktLjA4Ni4xOC0uMDg2ek0xMi45NiAxMC41NDFsLjM2LTEuMTEuMDktLjU5Ny0uMTguNTEyLS4yNyAxLjE5NXpNMTUuMjEgOS42ODdjLjA5IDAgLjA5LjA4NSAwIC4xNyAwIC4wODYtLjA5LjA4Ni0uMTggMC0uMDkgMC0uMDktLjA4NSAwLS4xN2guMTh6TTEyLjQyIDEwLjI4NWwuNzItMS4wMjQuMjctLjUxMi0uMzYuNDI2LS42MyAxLjExek0xNC44NSAxMC4xMTN2LjE3MWgtLjE4di0uMTdjLjA5LS4wODYuMTgtLjA4Ni4xOCAwek0xMi4wNiA5Ljk0NGwuOS0uNzY5LjM2LS40MjYtLjQ1LjM0MS0uODEuODU0ek0xNC40IDEwLjM3YzAgLjA4NCAwIC4wODQtLjA5LjE3LS4wOSAwLS4wOSAwLS4xOC0uMDg2IDAtLjA4NSAwLS4wODUuMDktLjE3LjA5IDAgLjE4LjA4NS4xOC4wODV6TTExLjcgOS42MDJsMS4xNy0uNTEyLjQ1LS4zNDEtLjU0LjI1Ni0xLjA4LjU5N3pNMTMuODYgMTAuNTRjMCAuMDg1IDAgLjA4NS0uMDkuMDg1cy0uMDkgMC0uMDktLjA4NSAwLS4wODUuMDktLjA4NS4wOSAwIC4wOS4wODV6TTExLjQzIDkuMDlsMS4yNi0uMjU2LjU0LS4xNy0uNjMuMDg0LTEuMTcuMzQyek0xMy4zMiAxMC41NGMwIC4wODUtLjA5LjA4NS0uMDkuMDg1LS4wOSAwLS4wOS0uMDg1LS4wOS0uMDg1IDAtLjA4NS4wOS0uMDg1LjA5LS4wODUuMDkgMCAuMDkuMDg1LjA5LjA4NXpNMTEuNDMgOC41NzhsMS4yNi4wODUuNjMtLjA4NS0uNjMtLjA4NS0xLjI2LjA4NXpNMTIuNzggMTAuNDU0YzAgLjA4Ni0uMDkuMDg2LS4xOC4wODZzMC0uMDg2IDAtLjE3YzAtLjA4Ni4wOS0uMDg2LjE4LS4wODZ2LjE3ek0xMS40MyA4LjA2NmwxLjE3LjM0MS42My4wODYtLjU0LS4xNzEtMS4yNi0uMjU2ek0xMi4zMyAxMC4xOTljMCAuMDg1LS4wOS4wODUtLjE4IDAtLjA5IDAtLjA5LS4wODYgMC0uMTcxIDAtLjA4NS4wOS0uMDg1LjE4IDB2LjE3ek0xMS43IDcuNTU0bDEuMDguNjgzLjU0LjI1Ni0uNDUtLjM0MS0xLjE3LS41OTh6TTExLjg4IDkuODU4aC0uMTh2LS4xNzFoLjE4Yy4wOS4wODUuMDkuMTcgMCAuMTd6TTEyLjA2IDcuMjEzbC44MS44NTQuNDUuMzQxLS4zNi0uNDI3LS45LS43Njh6TTExLjYxIDkuNDNjLS4wOSAwLS4wOSAwLS4xOC0uMDg0LS4wOS0uMDg2IDAtLjA4Ni4wOS0uMTcxLjA5IDAgLjA5IDAgLjE4LjA4NSAwIC4wODYtLjA5LjE3LS4wOS4xN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA4IiBkPSJNMTIuNDIgNi44NzJsLjU0IDEuMTEuMzYuNDI3LS4yNy0uNTEyLS42My0xLjAyNXpNMTEuNDMgOC45MmMtLjA5IDAtLjA5IDAtLjA5LS4wODYgMC0uMDg1IDAtLjA4NS4wOS0uMDg1cy4wOSAwIC4wOS4wODUgMCAuMDg1LS4wOS4wODV6TTEyLjk2IDYuNjE2bC4yNyAxLjE5NS4xOC41MTItLjA5LS41OTctLjM2LTEuMTF6TTExLjQzIDguNDA4Yy0uMDkgMC0uMDktLjA4Ni0uMDktLjA4NiAwLS4wODUuMDktLjA4NS4wOS0uMDg1LjA5IDAgLjA5LjA4NS4wOS4wODUgMCAuMDg2LS4wOS4wODYtLjA5LjA4NnpNMTMuNSA2LjYxNmwtLjA5IDEuMTk1LjA5LjUxMi4wOS0uNTk3LS4wOS0xLjExek0xMS41MiA3Ljg5NmMtLjA5IDAtLjA5LS4wODYtLjA5LS4xN2guMThzLjA5LjA4NC4wOS4xN2gtLjE4ek0xNC4wNCA2LjYxNmwtLjM2IDEuMTEtLjA5LjU5Ny4xOC0uNTEyLjI3LTEuMTk1ek0xMS43OSA3LjQ3Yy0uMDkgMC0uMDktLjA4NiAwLS4xNzIgMC0uMDg1LjA5LS4wODUuMTggMCAuMDkgMCAuMDkuMDg2IDAgLjE3MWgtLjE4ek0xNC41OCA2Ljg3MmwtLjcyIDEuMDI1LS4yNy41MTIuMzYtLjQyNy42My0xLjExek0xMi4xNSA3LjA0M3YtLjE3aC4xOHYuMTdjLS4wOS4wODUtLjE4LjA4NS0uMTggMHpNMTQuOTQgNy4yMTNsLS45Ljc2OC0uMzYuNDI3LjQ1LS4zNDEuODEtLjg1NHpNMTIuNiA2Ljc4NmMwLS4wODUgMC0uMDg1LjA5LS4xNy4wOSAwIC4wOSAwIC4xOC4wODUgMCAuMDg1IDAgLjA4NS0uMDkuMTctLjA5IDAtLjE4LS4wODUtLjE4LS4wODV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwOCIgZD0iTTE1LjMgNy41NTRsLTEuMTcuNTEyLS40NS4zNDIuNTQtLjI1NiAxLjA4LS41OTh6TTEzLjE0IDYuNjE2YzAtLjA4NSAwLS4wODUuMDktLjA4NXMuMDkgMCAuMDkuMDg1YzAgLjA4NiAwIC4wODYtLjA5LjA4NnMtLjA5IDAtLjA5LS4wODZ6TTE1LjU3IDguMDY2bC0xLjI2LjI1Ni0uNTQuMTcuNjMtLjA4NSAxLjE3LS4zNDF6TTEzLjY4IDYuNjE2YzAtLjA4NS4wOS0uMDg1LjA5LS4wODUuMDkgMCAuMDkuMDg1LjA5LjA4NSAwIC4wODYtLjA5LjA4Ni0uMDkuMDg2LS4wOSAwLS4wOS0uMDg2LS4wOS0uMDg2ek0xNS41NyA4LjU3OGwtMS4yNi0uMDg1LS41NC4wODUuNjMuMDg1IDEuMTctLjA4NXpNMTQuMjIgNi43MDFjMC0uMDg1LjA5LS4wODUuMTgtLjA4NXYuMTdzLS4wOS4wODYtLjE4LjA4NnYtLjE3ek0xNS41NyA5LjA5bC0xLjE3LS4zNDItLjYzLS4wODUuNTQuMTcgMS4yNi4yNTd6TTE0LjY3IDYuOTU3YzAtLjA4NS4wOS0uMDg1LjE4IDAgLjA5IDAgLjA5LjA4NSAwIC4xNyAwIC4wODYtLjA5LjA4Ni0uMTggMHYtLjE3ek0xNS4zIDkuNjAybC0xLjA4LS42ODMtLjU0LS4yNTYuNDUuMzQyIDEuMTcuNTk3ek0xNS4xMiA3LjI5OGguMTh2LjE3MWgtLjE4Yy0uMDktLjA4NS0uMDktLjE3IDAtLjE3ek0xNC45NCA5Ljk0NGwtLjgxLS44NTQtLjQ1LS4zNDEuMzYuNDI2LjkuNzY5ek0xNS4zOSA3LjcyNWMuMDkgMCAuMDkgMCAuMTguMDg1IDAgLjA4NiAwIC4wODYtLjA5LjE3MS0uMDkgMC0uMDkgMC0uMTgtLjA4NSAwLS4wODYuMDktLjE3LjA5LS4xN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA4IiBkPSJNMTQuNTggMTAuMjg1bC0uNTQtMS4xMS0uMzYtLjQyNi4yNy41MTIuNjMgMS4wMjR6TTE1LjU3IDguMjM3Yy4wOSAwIC4wOSAwIC4wOS4wODUgMCAuMDg2IDAgLjA4Ni0uMDkuMDg2cy0uMDkgMC0uMDktLjA4NmMwLS4wODUgMC0uMDg1LjA5LS4wODV6TTE0LjA0IDEwLjU0MWwtLjI3LTEuMTk1LS4xOC0uNTEyLjA5LjU5OC4zNiAxLjExeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMCI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIyNyIgaGVpZ2h0PSIxNy4wNiIgeT0iLjA0OCIgZmlsbD0iI2ZmZiIgcng9IjMiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K"
                alt="india"
              ></img>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default StoreFooter;
