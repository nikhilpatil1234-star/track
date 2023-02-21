import React from "react";
import { useSelector } from "react-redux";
import CardTemplate from "./card";
import "./style.scss";

const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);

  return (
    <div className="container expense-list-container">
      {list.length ? (
        list.map((item) => <CardTemplate item={item} />)
      ) : (
        <div className="error-image-container">
          <img src={require("./../../assets/empty.webp")} alt="error" />
          <h3>Your expense list is empty</h3>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
