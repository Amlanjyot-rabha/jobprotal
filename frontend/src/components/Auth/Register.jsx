import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context, useApi } from "../../main";
import { FaEye, FaEyeSlash, FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const { baseUrl } = useApi();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${baseUrl}/api/v1/user/register`,
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
        <img src="/register.png" alt="illustration" />
      </div>
      <div className="auth-form">
        <div className="auth-heading">Create your account</div>
        <div className="social-buttons">
          <button type="button" className="social-btn" title="Sign up with Facebook"><FaFacebookF /></button>
          <button type="button" className="social-btn" title="Sign up with Apple"><FaApple /></button>
          <button type="button" className="social-btn" title="Sign up with Google"><FaGoogle /></button>
        </div>
        <form autoComplete="off">
          <div className="inputTag">
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled hidden>Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <label className={role ? "floating" : ""}>Register As</label>
              <FaRegUser />
            </div>
          </div>
          <div className="inputTag">
            <div>
              <input
                type="text"
                placeholder="name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              <label className={name ? "floating" : ""}>Name</label>
              <FaPencilAlt />
            </div>
          </div>
          <div className="inputTag">
            <div>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <label className={email ? "floating" : ""}>Email</label>
              <MdOutlineMailOutline />
            </div>
          </div>

          <div className="inputTag">
            <div>
              <input
                type="number"
                placeholder="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                autoComplete="tel"
              />
              <label className={phone ? "floating" : ""}></label>
              <FaPhoneFlip />
            </div>
                 
          </div>

          <div className="inputTag">
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
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
          <div className="auth-actions">
            <button type="submit" onClick={handleRegister} className="auth-btn-primary">Sign Up</button>
            <Link to={"/login"} className="auth-btn-secondary" style={{textDecoration: 'none'}}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
