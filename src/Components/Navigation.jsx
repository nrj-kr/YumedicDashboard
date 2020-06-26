  import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from './logo.png';

function Navigation(props) {
    return (
      <div>
        <img src={logo} alt="logo" className="img-responsive  img-fluid" />
      <div className="list">
          <ul class="navbar-nav ml-auto">
              <li
                class={`lia  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Dashboard
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`lia  ${
                  props.location.pathname === "/Transactions" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Transactions">
                  Transactions
                </Link>
              </li>
              <li
                class={`lia  ${
                  props.location.pathname === "/approveDoctors" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/approveDoctors">
                  Approve Doctors
                </Link>
              </li>
              <li
                class={`lia  ${
                  props.location.pathname === "/addVendors" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/addVendors">
                  Add Vendors
                </Link>
              </li><li
                class={`lia  ${
                  props.location.pathname === "/approveRefund" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/approveRefund">
                  Approve Refund
                </Link>
              </li><li
                class={`lia  ${
                  props.location.pathname === "/userAnalytics" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/userAnalytics">
                  User Analytics
                </Link>
              </li>
              <li
                class={`lia  ${
                  props.location.pathname === "/cityAnalytics" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/cityAnalytics">
                  City Analytics
                </Link>
              </li>
            </ul> 
      </div>
    </div>
    );
}

export default withRouter(Navigation);