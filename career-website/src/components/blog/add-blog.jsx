import React from "react";
import BlogForm from "./form";
import SideNavbar from "../../views/sidenavbar";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import AdminHeader from "../adminHeader";

const AddBlog = () => {
  const authCtx = useContext(AuthContext)
  console.log('auth values',authCtx)
  return (
    <React.Fragment>
      <section className="job-main-area">
        <div className="container-fluid">
          <AdminHeader />
        </div>
        <SideNavbar />
        <div className="content-wrap">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right">
                  <div className="page-header">
                    <h1 className="page-title"> Blog</h1>
                    <div className="flexAlign">
                      <div>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="/admin/dashboard">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="/admin/blog">Blogs</a>
                          </li>
                          <li className="breadcrumb-item active">
                            Add Blog
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogForm type={"Add"}/>

            </div>
          </div>
         
        </div>
      </section>
    </React.Fragment>
  );
};
export default AddBlog;
