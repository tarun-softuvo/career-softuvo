import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import apiUrl from "../../Constant";
import SideNavbar from "../../views/sidenavbar";
import ReadMore from "../read-more";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import AdminHeader from "../adminHeader";
const DisplayJobs = () => {
    const [jobs,setJobs]= useState([])
    const [currentPage,setCurrentPage]= useState(1)
    const authCtx = useContext(AuthContext)
    let token =authCtx.token
    const navigate = useNavigate()
    function editHandler(value){
      navigate("/admin/get-job-detail/" + value)
    }
    function deleteHandler(){

    }
    async function getJobs(){
      let response = await axios({
        url:apiUrl + 'view-jobs',
        method:'GET',
        headers:{
          'Authorization': 'Bearer '+token
        }
      })
      console.log('response in jobs',response.data)
      setJobs(response.data.jobs)
    }
    useEffect(()=>{
      getJobs()
    },[])
  return (
    <React.Fragment>
         <div>
      <section className="job-main-area">
        <div className="container-fluid">
          <AdminHeader />
          <div className="column"></div>
        </div>
        <SideNavbar />
        <div className="content-wrap">
            <div className="content container-fluid">
          <div className="main">
              <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right">
                  <div className="page-header">
                    <h1 className="page-title">Jobs</h1>
                    <div className="flexAlign">
                      <div>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item active">
                            Job Listing
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <a href="create-job" className="btn add-btn">
                      Add Job <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="mt-3">
                    {/* <div className="search-table text-end">
                      <form>
                        <div className="form-group">
                          <input
                            type="search"
                            placeholder="Search"
                            className="form-control w-auto ms-auto"
                          />
                        </div>
                      </form>
                    </div> */}
                    <div className="table-responsive adminCommon-table">
                      <table className="table table-striped table-hover">
                        <tr>
                          <th>Sr.No.</th>
                          <th>Position</th>
                          <th>Department</th>
                          <th>Description</th>
                          <th>Vacancies</th>
                          <th>Actions</th>
                        </tr>
                        {jobs.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + (currentPage - 1) * 6 + 1}</td>
                              <td>{value.position}</td>
                              <td>{value.department}</td>
                              <td>
                                    <ReadMore>{value.description}</ReadMore>
                              </td>
                              <td>
                                    {value.vacancies}                               
                              </td>
                              <td>
                              <div>
                                      <a
                                        href="javascript:;"
                                        className="greenColor me-2"
                                        onClick={(e) => {
                                          editHandler(value._id);
                                        }}
                                      >
                                        <i className="fas fa-edit"></i>
                                      </a>
                                      <a
                                        href="javascript:;"
                                        className="greenColor"
                                        onClick={(e) => {
                                          deleteHandler(value._id);
                                        }}
                                      >
                                        <i className="fas fa-trash-alt"></i>
                                      </a>
                                    </div>
                              </td>
                            </tr>
                          );
                        })}
                      </table>
                      {/* <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
     
    </React.Fragment>
  );
};
export default DisplayJobs;
