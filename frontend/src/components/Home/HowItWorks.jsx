import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const steps = [
  {
    icon: <FaUserPlus />, title: "Create Account", desc: "Sign up and join the platform in seconds."
  },
  {
    icon: <MdFindInPage />, title: "Find or Post Jobs", desc: "Browse jobs or post your own opportunities."
  },
  {
    icon: <IoMdSend />, title: "Apply or Recruit", desc: "Apply for jobs or recruit top talent easily."
  }
];

const HowItWorks = () => (
  <section className="howitworks-modern">
    <div className="howitworks-container">
      <h3 className="howitworks-title">How Career Connect Works</h3>
      <div className="howitworks-steps">
        {steps.map((step, idx) => (
          <div className="howitworks-card" key={idx}>
            <div className="howitworks-icon">{step.icon}</div>
            <div className="howitworks-card-title">{step.title}</div>
            <div className="howitworks-card-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
