import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import apiUrl from "../../Constant";
import Header from "../header";
import SideNavbar from "../../views/sidenavbar";
import AdminHeader from "../adminHeader";

const ViewCategories = () => {
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount,setTotalCount]=useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(currentPage);
  }, [currentPage]);

  async function getCategory(currentPage) {
    let response = await axios({
      method: "GET",
      url: `${apiUrl}get-categories-details?page=${currentPage}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      let categories = response.data.docs;
      setCategory(categories);
      setTotalCount(response.data.count)
    }
  }
  async function statusHandler(currentId, currentStatus) {
    console.log("Targeted item", currentId, currentStatus);
    var status = "Disable";
    if (currentStatus) {
      status = "Enable";
    }
    let editCategory = {
      id: currentId,
      status: status,
    };
    try {
      let response = await axios.post(
        apiUrl + "edit-category-status",
        editCategory
      );
      if (response.status === 201) {
        getCategory(currentPage);
      }
    } catch (err) {
      console.log("error", err);
    }
  }
  function editCategoryHandler(item) {
    // console.log("Targetted Category",item)
    navigate("/admin/edit-category/" + item.category_name,{state:{item}});
  }

  function deleteHandler(item) {
    console.log("delete Handler Called");
    confirmAlert({
      title: "Delete Category",
      message: "Are you sure to remove this category?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            let response = await axios.post(apiUrl + "delete-category", {
              id: item,
            });
            if (response.status === 201) {
              getCategory(currentPage);
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            console.log("Clicked No");
          },
        },
      ],
    });
  }
  function pageHandler(e) {
    let newOffset = e.selected + 1;
    setCurrentPage(newOffset);
    console.log("current Page", newOffset);
  }
  return (
    <React.Fragment>
        <section className="job-main-area">
        <div className="container-fluid">
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
                      <h1>Blog Categories</h1>
                    </div>
                    <div className="page-title">
                      <ol className="breadcrumb text-right">
                        <li>
                          <a href="/admin/dashboard">Dashboard</a>
                        </li>
                        <li className="active">Blog Category</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
        {/* <div className="text-end">
                    <a href="add-blog-category" className="btn add-btn">
                    Add Category <i className="fa fa-plus"></i>
                    </a>
                  </div> */}
              <div className="row">
                <div className="addBlogOuter my-5">
                  <div className="col-sm-12">
                    <div className="mt-3">

                      <div className="table-responsive adminCommon-table">
                        <table className="table table-striped table-hover">
                          <tr>
                            <th>Sr.No.</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>

                          {category.map((value, key) => {
                            return (
                              <tr key={key}>
                                <td>{key + (currentPage - 1) * 6 + 1}</td>
                                <td>{value.category_name}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    id={key}
                                    className="checkbox"
                                    checked={value.status === "Enable"}
                                    onChange={(e) =>
                                      statusHandler(value._id, e.target.checked)
                                    }
                                  />
                                  <label
                                    htmlFor={key}
                                    className="toggle"
                                  ></label>
                                </td>
                                <td>
                                  <div className="p-0">
                                    <a
                                      href="javascript:;"
                                      className="greenColor me-2"
                                      onClick={() =>
                                        editCategoryHandler(value)
                                      }
                                    >
                                      <i className="fas fa-edit"></i>
                                    </a>
                                    <a
                                      href="javascript:;"
                                      className="greenColor"
                                      onClick={() => deleteHandler(value._id)}
                                    >
                                      <i className="fas fa-trash-alt"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </table>
                        </div>
                    </div>
                    <div>
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
export default ViewCategories;
