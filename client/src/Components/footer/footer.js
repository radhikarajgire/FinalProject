import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./css-modules.css";

const FooterPage = () => {
  return (
    <MDBFooter color="rgba-blue-light" className="font-small pt-5 mt-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 class="text-black-50" className="title">
              RTHREE Academy{" "}
            </h5>
            <p class="text-black-50">
              Join the road to success for life-long learning.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Link</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" class="text-black-50">
                  GDPR
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class="text-black-50">
                  FAQ
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class="text-black-50">
                  Jobs
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class="text-black-50">
                  Imprint
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
