import React from "react";
import classes from "./DisplayAmountsField.module.css";

/* 
  This component displays the results of the form
*/

const DisplayAmountsField = (props) => {
  return (
    <div className={classes.amountField}>
      <div>
        <h2>{props.componentName}</h2>
        <p>{props.per}</p>
      </div>
      <div>
        <p className={classes.amount}>${props.children}</p>
      </div>
    </div>
  );
};

export default DisplayAmountsField;
