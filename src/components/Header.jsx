import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    navigate("/login");
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
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
