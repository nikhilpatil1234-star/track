import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container container-fluid">
      <div className="header">
        <div className="header-logo">
          <h2>TrackExpense </h2> <CreditCardIcon />
        </div>
        <Link to="/test">
          <a href="H"
            style={{
              color: "black"
            }}
          >
            Test
          </a>
        </Link>
        <div className="header-git-btn">
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
