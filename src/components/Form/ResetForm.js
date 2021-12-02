import React from "react";
import classes from "./ResetForm.module.css";

const ResetForm = (props) => {
  return (
    <button className={classes.resetButton} onClick={props.onClick}>
      Reset
    </button>
  );
};

export default ResetForm;
