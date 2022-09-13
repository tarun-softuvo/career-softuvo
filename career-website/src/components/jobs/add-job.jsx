import React from "react";
import SideNavbar from "../../views/sidenavbar";
import JobForm from "./form";
import AdminHeader from "../adminHeader";

const AddJob = () => {
  return (
    <React.Fragment>
      <section className="job-main-area">
        <div className="container-fluid">
            <AdminHeader/>
        </div>
        <SideNavbar />
        <div className="content-wrap">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right">
                  <div className="page-header">
                    <h1 className="page-title">Job</h1>
                    <div className="flexAlign">
                      <div>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="/admin/dashboard">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="/admin/blog">Jobs</a>
                          </li>
                          <li className="breadcrumb-item active">
                            Add Job
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <JobForm type={"Add"}/>

            </div>
          </div>
         
        </div>
      </section>
    </React.Fragment>
  );
};
export default AddJob;
