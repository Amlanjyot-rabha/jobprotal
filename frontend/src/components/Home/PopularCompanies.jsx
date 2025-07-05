import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const companies = [
  {
    id: 1,
    title: "Microsoft",
    location: "Millennium City Centre, Gurugram",
    openPositions: 10,
    icon: <FaMicrosoft />,
  },
  {
    id: 2,
    title: "Tesla",
    location: "Millennium City Centre, Gurugram",
    openPositions: 5,
    icon: <SiTesla />,
  },
  {
    id: 3,
    title: "Apple",
    location: "Millennium City Centre, Gurugram",
    openPositions: 20,
    icon: <FaApple />,
  },
];

const PopularCompanies = () => (
  <section className="companies-modern">
    <div className="companies-container">
      <h3 className="companies-title">Top Companies</h3>
      <div className="companies-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.id}>
            <div className="company-icon">{company.icon}</div>
            <div className="company-info">
              <div className="company-title">{company.title}</div>
              <div className="company-location">{company.location}</div>
            </div>
            <button className="company-btn">Open Positions {company.openPositions}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularCompanies;
