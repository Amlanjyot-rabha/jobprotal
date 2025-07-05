import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const filterChips = [
  "Experience Level",
  "Company",
  "Job types",
  "Salary",
  "Markets",
  "Benefits",
];

const HeroSection = () => {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="hero-landing">
      <div className="hero-bg">
        <div className="hero-content">
          <h1 className="hero-title">Let's find your dream job</h1>
          <p className="hero-subtitle">
            Discover the best remote and work from home jobs at top remote companies.
          </p>
          <form className="hero-searchbar" onSubmit={e => e.preventDefault()}>
            <div className="search-input-group">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Job title or keyword"
                value={job}
                onChange={e => setJob(e.target.value)}
              />
            </div>
            <div className="search-input-group">
              <FaMapMarkerAlt className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Country or time zone"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>
            <button className="search-clear" type="button">Clear</button>
            <button className="search-btn" type="submit">Search</button>
          </form>
          <div className="hero-filters">
            {filterChips.map((chip, idx) => (
              <button className="filter-chip" key={chip} type="button">
                {chip} <FaChevronDown className="chip-icon" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
