import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Category } from "../constant";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expenses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModel from "./success-model";
import Form from "react-bootstrap/Form";

// import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [categaries, setCategaries] = useState();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
    }
    setAmount(val);
  };
  const handleCategory = (data) => {
    setCategaries(data);
    setCategoryOpen(false);
  };
  const handleSubmit = () => {
    console.log("clicked");
    if (title === "" || amount === "" || categaries === "") {
      const notify = () => toast("enter the data!");
      notify();
      console.log("no data");
      return;
    }
    const data = {
      title,
      amount,
      categaries,
      created: new Date(),
    };
    // const notify = () => toast("Added successfull");
    // notify();
    setModelOpen(true);
    dispatch(addExpense(data));
  };
  return (
    <div className="form-container container">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
      <div className="form-item">
        <label>Title:</label>
        <inputGroup className="mb-1">
          <Form.Control
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
        </inputGroup>
      </div>
      <div className="form-item">
        <label> amount₹:</label>
        <inputGroup> 
        <Form.Control
          type="number"
          placeholder="Enter the amount"
          value={amount}
          className="amount-input"
          onChange={(e) => handleAmount(e)}
        />
        </inputGroup>
      </div>
      <div className="category-containing-parent">
        <div className="categary">
          <div
            className="categary-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>
              {categaries ? (
                categaries.title
              ) : (
                <>
                  Categaries
                  <ArrowDownwardIcon />
                </>
              )}
            </label>
          </div>
          {categoryOpen && (
            <div className="categroy-container">
              {Category.map((data) => (
                <div
                  className="category-item"
                  key={data.id}
                  style={{ borderRight: `5px solid ${data.color}` }}
                  onClick={() => handleCategory(data)}
                >
                  <label>{data.title}</label>
                  {data.icon}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="add-btn" onClick={() => handleSubmit()}>
        <label>Add</label>
        <AddCircleOutlineIcon />
      </div>
    </div>
  );
};

export default AddForm;
