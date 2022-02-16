import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <form className="form-inline" action="/action_page.php">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Notification
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  text-light" to="/">
              User Setting
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
