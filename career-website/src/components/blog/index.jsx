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
import AdminHeader from "../adminHeader";
const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const navigate = useNavigate();
  async function getBlogs() {
    let response = await axios.get(
      `${apiUrl}display-blogs?page=${currentPage}`
    );
    // console.log("response", response);
    if (response.status === 201) {
      console.log("Value set");
      setBlogs(response.data.blogs);
      setTotalCount(response.data.count);
    }
  }

  useEffect(() => {
    getBlogs();
  }, [currentPage]);
  {
    blogs.map((value, index) => console.log(value.title));
  }

  async function popularStatusHandler(status, id) {
    // console.log('Status handler',status,id)
    let response = await axios.post(apiUrl + "change-popular-status", {
      status,
      id: id,
    });
    if (response.status === 201) {
      getBlogs(currentPage);
    }
  }
  async function editBlogHandler(data) {
    console.log("data in slug", data.slug);
    navigate("/admin/edit-blog/" + data.slug);
  }
  async function deleteHandler(id) {
    confirmAlert({
      title: "Blog Delete",
      message: "Are you sure to delete this blog?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            let response = await axios.post(`${apiUrl}delete-blog`, { id: id });
            if (response.status === 201) {
              getBlogs(currentPage);
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  }
  async function pageHandler(e) {
    let newOffset = e.selected + 1;
    setCurrentPage(newOffset);
    console.log("current Page", newOffset);
  }
  async function statusHandler(status, id) {
    console.log("Status handler", status, id);

    let response = await axios.post(apiUrl + "edit-blog-status", {
      status,
      id: id,
    });
    if (response.status === 201) {
      getBlogs(currentPage);
    }
  }
  return (
    <React.Fragment>
      <section className="job-main-area">
        <div className="conatiner-fluid">
          <AdminHeader/>
          </div>
        <SideNavbar />

        <div className="content-wrap">
          <div className="container-fluid">
            <div className="main">
              <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right ">
                  <div className="page-header">
                    <div className="page-title">
                      <h1>View Blogs</h1>
                    </div>
                    <div className="page-title">
                      <ol className="breadcrumb text-right">
                        <li>
                          <a href="/admin/dashboard">Dashboard</a>
                        </li>
                        <li className="active">View Blogs </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="addBlogOuter">
                  <div className="col-sm-12">
                    <div className="mt-3">
                      <div className="table-responsive adminCommon-table">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Sr. No.</th>
                              <th>Title</th>
                              <th>Category</th>
                              <th>Content</th>
                              {/* <th>Popular</th> */}
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>

                            {blogs.map((value, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + (currentPage - 1) * 6 + 1}</td>
                                  <td>{value.title}</td>
                                  <td>{value.category}</td>
                                  <td>
                                    <ReadMore>{value.content}</ReadMore>
                                  </td>
                                  {/* <td>
                                    <input
                                      type="checkbox"
                                      id={index}
                                      className="checkbox"
                                      checked={value.popular}
                                      onChange={(e)=>{popularStatusHandler(e.target.checked,value._id)}}
                                    />
                                    <label
                                      htmlFor={index}
                                      className="toggle"
                                    ></label>
                                  </td> */}
                                  <td>
                                    <input
                                      type="checkbox"
                                      id={index}
                                      className="checkbox"
                                      checked={value.status}
                                      onChange={(e) => {
                                        statusHandler(
                                          e.target.checked,
                                          value._id
                                        );
                                      }}
                                    />
                                    <label
                                      htmlFor={index}
                                      className="toggle"
                                    ></label>
                                  </td>
                                  <td>
                                    <div>
                                      <a
                                        href="javascript:;"
                                        className="greenColor me-2"
                                        onClick={(e) => {
                                          editBlogHandler(value);
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
                          </thead>
                        </table>
                      </div>
                    </div>

                    <ReactPaginate
                      nextLabel="Next"
                      previousLabel="Previous"
                      pageCount={totalCount}
                      onPageChange={pageHandler}
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      containerClassName="pagination"
                      activeClassName="active"
                      renderOnZeroPageCount={null}
                    />
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
export default AllBlogs;
