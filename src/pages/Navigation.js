import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Gym Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/love-calculator" className="nav-link">
            Love Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dummypage" className="nav-link">
            dummypage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
