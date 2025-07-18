import React, { useContext, useEffect, useState } from "react";
import { Context, useApi } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const { baseUrl } = useApi();
  const navigateTo = useNavigate();

const handleLogout = async () => {
  try {
    await axios.get(`${baseUrl}/api/v1/user/logout`, {
      withCredentials: true
    });
    // setIsAuthorized(false);
    navigateTo("/login");
  } catch (error) {
    // error handling
  }
};


  

  return (
    <nav className={isAuthorized ? "navbar-modern" : "navbarHide"}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/careerconnect-white.png" alt="logo" />
        </div>
        <ul className={show ? "navbar-menu show" : "navbar-menu"}>
          <li>
            <Link to="/" onClick={() => setShow(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/job/getall" onClick={() => setShow(false)}>
              All Jobs
            </Link>
          </li>
          <li>
            <Link to="/applications/me" onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "Applicants"
                : "My Applications"}
            </Link>
          </li>
          {user && user.role === "Employer" && (
            <>
              <li>
                <Link to="/job/post" onClick={() => setShow(false)}>
                  Post Job
                </Link>
              </li>
              <li>
                <Link to="/job/me" onClick={() => setShow(false)}>
                  Your Jobs
                </Link>
              </li>
            </>
          )}
          <li>
            <button className="navbar-logout" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <div className="navbar-hamburger" onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
