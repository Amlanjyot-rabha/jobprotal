import React, { useContext } from 'react'
import { Context } from "../../main"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri"

function Footer() {
  const { isAuthorized } = useContext(Context)
  return (
    <footer className={isAuthorized ? "footer-modern" : "footerHide"}>
      <div className="footer-content">
        <div className="footer-socials">
          <Link to={'hhttps://github.com/Amlanjyot-rabha/jobprotal'} target='_blank' title="GitHub"><FaGithub /></Link>
          {/* <Link to={'https://leetcode.com/u/exclusiveabhi/'} target='_blank' title="LeetCode"><SiLeetcode /></Link> */}
          <Link to={'https://www.linkedin.com/feed/'} target='_blank' title="LinkedIn"><FaLinkedin /></Link>
          <Link to={'https://www.instagram.com/amlanjyoti_rava/'} target='_blank' title="Instagram"><RiInstagramFill /></Link>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} All Rights Reserved by Amlan
        </div>
      </div>
    </footer>
  )
}

export default Footer