import React from "react";
import { Link, useNavigate } from "react-router-dom";
//Loader
//Images
import logo from "../../assets/images/softuvo_logo_green.png";
const Error = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <section className="login-wrapper">
        <div className="login-main">
          <div className="container">
            <div className="logo-div">
              <Link to="/">
                {" "}
                <img src={logo} alt="login-page" />{" "}
              </Link>
              <h5> This page is unknown or does not exist</h5>
              <p>
                Sorry about that, but the page you looking for is not available
              </p>
              <a href="/admin/login"> Go to login</a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Error;
