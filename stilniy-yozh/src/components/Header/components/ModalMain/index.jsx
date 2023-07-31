import React, { useState, useEffect } from "react";

import "./ModalMain.css";
import Form from "../../../Form";
const ModalMain = ({ handleClick }) => {
  return (
    <div className="modal-main">
      <div onClick={() => handleClick()} class="modal-main__close">
        &times;
      </div>
      <Form />
    </div>
  );
};

export default ModalMain;
