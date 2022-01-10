import React from "react";

const PayoutList = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12  header-wrapper mt-6">
          <h1 className="page-header">Payouts</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="dataTables_length">
                <label>
                  Show{" "}
                  <select className="form-control input-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>{" "}
                  <span>entries</span>
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="dataTables_filter">
                <label>
                  Search:
                  <input
                    type="search"
                    className="form-control input-sm"
                    placeholder=""
                  />
                </label>
              </div>
            </div>
          </div>
          <table className="table " id="dataTables-userlist">
            <thead>
              <tr>
                <th>Month </th>
                <th>Year</th>
                <th className="text-center">Total Sale</th>
                <th className="text-center">Payout Date</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" ">
                <td>November</td>
                <td>2021</td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 30000
                </td>

                <td className="text-center">{new Date().toDateString()}</td>
                <td className="text-center">
                  <span className="status active">Transferred</span>
                </td>
              </tr>
              <tr className=" ">
                <td>December</td>
                <td>2021</td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 40000
                </td>

                <td className="text-center"> </td>
                <td className="text-center">
                  <span className="status inactive">Pending</span>
                </td>
              </tr>
              <tr className=" ">
                <td>December</td>
                <td>2021</td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 40000
                </td>

                <td className="text-center"> </td>
                <td className="text-center">
                  <span className="status inactive">Pending</span>
                </td>
              </tr>
              <tr className=" ">
                <td>December</td>
                <td>2021</td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 40000
                </td>

                <td className="text-center"> </td>
                <td className="text-center">
                  <span className="status inactive">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="dataTables_info">Showing 1 to 10 of 12 entries</div>
        </div>
        <div className="col-sm-6">
          <div className="dataTables_paginate paging_full_numbers">
            <ul className="pagination">
              <li className="paginate_button previous disabled">
                <div className="btn">&lt;</div>
              </li>
              <li className="paginate_button active">
                <div className="btn">1</div>
              </li>
              <li className="paginate_button ">
                <div className="btn">2</div>
              </li>
              <li className="paginate_button next">
                <div className="btn">&gt;</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayoutList;
