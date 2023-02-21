import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./style.scss";
import { Link } from "react-router-dom";

const TopFold = () => {
  const [query, setQuery] = useState();
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="top-fold-container container">
      {window.location.pathname === "/" ? (
        <div className="top-fold-search-add-container">
          <div className="top-folds-search-bar">
            <SearchIcon />
            <input
              placeholder="Search for Expenses"
              value={query}
              onChange={(e)=>handleQuery(e)}
            />
          </div>
          <div className="top-fold-add-btn">
            <Link to="/add-expense">
              <AddCircleOutlineIcon />
              <label>Add</label>
            </Link>
          </div>
        </div>
      ) : (
        <div className="top-folds-back-conatainer">
          <div className="top-folds-back-btn">
            <Link to="/">
              <ArrowBackIosIcon />
              <label>Back</label>
            </Link>
          </div>
          <div className="top-fold-cancle-btn">
            <Link to="/">
              <HighlightOffIcon />
              <label>Cancel</label>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
