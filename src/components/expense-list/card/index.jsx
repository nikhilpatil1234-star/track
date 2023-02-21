import moment from "moment/moment";
import React from "react";
import "./style.scss";
import DeleteIcon from "@mui/icons-material/Delete";
// import { useDispatch } from "react-redux";
// import { DELETE_EXPENSE } from "../../redux/actions-types/expenses";

const CardTemplate = ({ item }) => {
  const time = moment(item.created).fromNow();
  // const dispatch=useDispatch()
//   const handleDelete=()=>{
// dispatch(DELETE_EXPENSE(item))
//   }
  // console.log(time);
  // console.log(item);
  return (
    <div
      className="card-container container"
      style={{ borderRight: `6px solid ${item.categaries.color}` }}
    >
      <div className="icon-container">
        <p> {item.categaries.icon}</p>
        <p>{item.categaries.title}</p>
      </div>
      <div className="card-info-conatiner">
        <div className="card-title-container">
          <p> {item.title}</p>
        </div>
        <div className="card-time-container">
          <p>{time}</p>
        </div>
      </div>
      <div className="card-delete-amount-container" >
        <div className="card-delete">
          <DeleteIcon />
        </div>
        <div className="card-amount">
          <p> amount:${item.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
