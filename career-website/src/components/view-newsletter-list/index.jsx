import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const ViewNewsLetterList = () => {
    const [category,setCategory]=useState([])
    const [totalCount,setTotalCount]=useState(1)
    const [currentPage,setCurrentPage]=useState(1)
    function pageHandler(){
        console.log("pageHandler")
    }
    return (
    <React.Fragment>
      
        <div className="container-fluid">
          <div className="main">
            
            <div className="row">
              <div className="addBlogOuter my-5">
                <div className="col-sm-12">
             
                    <div className="table-responsive adminCommon-table">
                      <table className="table table-striped table-hover">
                        <tr>
                          <th>Sr.No.</th>
                          <th>NewsLetter Name</th>
                          <th>Date</th>
                          {/* <th>Actions</th> */}
                        </tr>

                        {category.map((value, key) => {
                          return (
                            <tr key={key}>
                              <td>{key + (currentPage - 1) * 6 + 1}</td>
                              <td>{value.newslettername}</td>
                              <td>{value.date}</td>
                            </tr>
                          );
                        })}
                      </table>
 
                  </div>
                  <div></div>

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
     
    </React.Fragment>
  );
};
export default ViewNewsLetterList;
