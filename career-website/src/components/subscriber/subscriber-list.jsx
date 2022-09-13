
import React from "react";
import { useState } from "react";

import { TablePagination } from "react-pagination-table";
import { useNavigate } from "react-router-dom";

const SubscriberData = [
  {
    name: "tarun@gmail.com",
    status: "subscribed",
  },
  {
    name: "tarun@testmail.com",
    status: "subscribed",
  },
  {
    name: "vikas@gmail.com",
    status: "subscribed",
  },
  {
    name: "rahul@gmail.com",
    status: "subscribed",
  }, {
    name: "tarun@gmail.com",
    status: "subscribed",
  },
  {
    name: "tarun@testmail.com",
    status: "subscribed",
  },
  {
    name: "vikas@gmail.com",
    status: "subscribed",
  },
  {
    name: "rahul@gmail.com",
    status: "subscribed",
  }, {
    name: "tarun@gmail.com",
    status: "subscribed",
  },
  {
    name: "tarun@testmail.com",
    status: "subscribed",
  },
  {
    name: "vikas@gmail.com",
    status: "subscribed",
  },
  {
    name: "rahul@gmail.com",
    status: "subscribed",
  },
];
const SubscriberList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const navigate = useNavigate();
  const [subscriber, setSubscriber] = useState(SubscriberData);
  let [tags, setTags] = useState(["Email", "Status"]);
  function statusHandler() {}
  return (
    <React.Fragment>
      <section>
        {/* <div className="content-wrap"> */}
        <div className="container-fluid">
          <div className="main">
            <div className="row">
              <div className="">
              <table className="">
                <TablePagination
                  title="Subscriber List"
                  subTitle=""
                  headers={tags}
                  data={subscriber}
                  columns="name.status"
                  perPageItemCount={5}
                  totalCount={subscriber.length}
                  className="pageTable"
                  nextPageText="Next"
                  prePageText="Previous"
                  paginationClassName="pagination"
             
                />
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default SubscriberList;
