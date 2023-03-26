import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-phone">Add Number</Link>
          </li>
          <li>
            <Link to="/update-phone">Update Number</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
