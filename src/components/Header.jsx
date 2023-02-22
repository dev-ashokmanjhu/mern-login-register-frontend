import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <ul>
        {token ? (
          <li onClick={logOutHandler}>
            <Link>Log Out</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Log IN</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
