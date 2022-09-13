import React from "react";
import SideNavbar from "../../views/sidenavbar";
import AdminHeader from "../adminHeader";
import CategoryForm from "./form";

const AddCategory = () => {
  return (
    <React.Fragment>
      <section className="main-job-area">
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
                    <h1 className="page-title"> Blog Category</h1>
                    <div className="page-title">
                    <ol className="breadcrumb text-right">
                      <li>
                        <a href="/admin/dashboard">Dashboard</a>
                      </li>
                      <li className="active">Add Category</li>
                    </ol>
                  </div>
                  </div>
                 
                </div>
              </div>
              <CategoryForm type={"Add"} />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddCategory;
