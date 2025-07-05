import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaEye, FaEyeSlash, FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import './style.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://jobprotal-g6ed.onrender.com/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="auth-dribbble">
      <div className="auth-illustration">
        <img src="/login.png" alt="illustration" />
      </div>
      <div className="auth-form">
        <div className="auth-heading">Welcome,<br />please authorize</div>
        <div className="social-buttons">
          <button type="button" className="social-btn" title="Login with Facebook"><FaFacebookF /></button>
          <button type="button" className="social-btn" title="Login with Apple"><FaApple /></button>
          <button type="button" className="social-btn" title="Login with Google"><FaGoogle /></button>
        </div>
        <form autoComplete="off">
          <div className="inputTag">
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled hidden>role</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Employer">Employer</option>
              </select>
              <label className={role ? "floating" : ""}>Login As</label>
              <FaRegUser />
            </div>
          </div>
          <div className="inputTag">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
              <label className={email ? "floating" : ""}>Email</label>
              <MdOutlineMailOutline />
            </div>
          </div>
          <div className="inputTag">
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <label className={password ? "floating" : ""}>Password</label>
              <span
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={0}
                role="button"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <RiLock2Fill />
            </div>
          </div>
          <Link to="#" className="auth-link">Forgot password?</Link>
          <div className="auth-actions">
            <button type="submit" onClick={handleLogin} className="auth-btn-primary">Login</button>
            <Link to={"/register"} className="auth-btn-secondary" style={{textDecoration: 'none'}}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
