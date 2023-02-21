import React from "react";
import Modal from "react-modal";
import HomeIcon from "@mui/icons-material/Home";
import "./successmodel.scss";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius:"10px"
  },
};

const SuccessModel = ({modelOpen,setModelOpen}) => {
    let navi=useNavigate()
  return (
    <Modal isOpen={modelOpen} style={customStyles}>
      <div className="model-inner">
        <label>Expense Added Successfull</label>
        <img
          src={require("../../assets/success.png")}
          alt="expenses added"
          className="added-image"
          srcset=""
        />
        <div className="home-btn-icon-container" onClick={()=>navi("/")}>
          <HomeIcon /> <label>Home</label>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModel;
