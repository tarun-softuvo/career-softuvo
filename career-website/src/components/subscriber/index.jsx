import React from "react";
import { useState } from "react";
import SideNavbar from "../../views/sidenavbar";
import AdminHeader from "../adminHeader";
import Subscriberform from "./subscriber-form";
import SubscriberList from "./subscriber-list";
const Subscriber = () => {
    const [formDisplay,setFormDisplay]= useState(false)
    const [formType,setFormType]=useState('')
    function addSubscriberHandler(){
        console.log('add Handler')
        setFormType('Subscribe')
        setFormDisplay(true)
    }
    function removeSubscriberHandler(){
        setFormDisplay(true)
        setFormType('Unsubscribe')
       
    }
    function subscriberListHandler(){
        setFormDisplay(false)
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
                      <h1>Subscriber Panel</h1>
                    </div>
                    <div className="page-title">
                      <div className="breadcrumb text-right">
                        <li>
                          <a href="/admin/dashboard">Dashboard</a>
                        </li>
                        <li className="active">Subscriber</li>
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
                                        Subscriber Management Panel
                                    </h3>
                                </div>
                            </div>
                        </div>
                            <div className="controlPanel">
                                <button onClick={addSubscriberHandler}>Add Subscriber</button>
                                <button onClick={removeSubscriberHandler}>Remove Subscriber</button>
                                <button onClick={subscriberListHandler}>View Subscriber List</button>
                            </div>
                            {formDisplay ? <Subscriberform  type={formType}/>:<SubscriberList/>}
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
export default Subscriber;
