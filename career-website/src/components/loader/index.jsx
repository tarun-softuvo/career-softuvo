import React from "react";
import loaderImg from "../../assets/images/eclipse-loader.svg";

function Loader() {
  return (
    <React.Fragment>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
}

export function FullPageLoader() {
  return (
    <React.Fragment>
      <div className="page-loader">
        <img src={loaderImg} alt="Page Loader" />
      </div>
    </React.Fragment>
  );
}

export default Loader;
