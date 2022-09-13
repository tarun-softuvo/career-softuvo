import React from "react";
import { useState } from "react";
import CreateNewsLetter from "../create-newsletter";
import SideNavbar from "../../views/sidenavbar";
import ViewNewsLetterList from "../view-newsletter-list";
import AdminHeader from "../adminHeader";
const NewsLetter = () => {

  const [addNewsLetter,setAddNEwsLetter]= useState(true)
  const [viewNewsLetter,setViewNewsLetter]=useState(false)
  function createNewsLetterHandler(){
    console.log('createNewsLetter Handler')
    if(viewNewsLetter) setViewNewsLetter(false)
  }
  function viewNewsLetterHandler(){
    if(addNewsLetter) setAddNEwsLetter(false)
  }
  return (
    <React.Fragment>
      <section className="job-main-area">
        <div className="conatiner-fluid">
          <AdminHeader />
        </div>
        <SideNavbar />
        <div className="content-wrap">
          <div className="container-fluid">
            <div className="main">
              <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right">
                  <div className="page-header">
                    <div className="page-title">
                      <h1>News Letter </h1>
                    </div>
                    <div className="page-title">
                      <div className="breadcrumb text-right">
                        <li>
                          <a href="/admin/dashboard">Dashboard</a>
                        </li>
                        <li className="active">NewsLetter</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-10 mx-auto">
                    <div className="addBlogOuter my-5">
                        <div className="card card-custom card-stretch border-0">
                            <div className="card-header py-3 mb-3">
                                <div className="card-title align-items-start flex-column mb-0">
                                    <h3 className="card-label font-weight-bolder">
                                        NewsLetter Management Panel
                                    </h3>
                                </div>
                            </div>
                        </div>
                          <div className="controlPanel">
                            <button onClick={createNewsLetterHandler}>Create News Letter</button>
                            <button onClick={viewNewsLetterHandler}>View News Letter</button>
                          </div>
                          {addNewsLetter ? < CreateNewsLetter/> :<ViewNewsLetterList/>}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default NewsLetter;
