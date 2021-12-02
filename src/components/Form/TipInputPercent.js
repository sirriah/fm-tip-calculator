import React from "react";

import classes from "./TipInputPercent.module.css";

/* 
  Part of the form - the percent value. I rebuild the html <input type="radio">
  because this is easier to style.
*/

const TipInputPercent = (props) => {
  return (
    <li
      value={props.value}
      name="percent"
      id={`percentage${props.value}`}
      checked={props.checked}
      onClick={props.onClick}
      role="radio"
      aria-checked={props.checked}
      tabIndex="0"
      className={`${classes.tipInputPercent} ${props.className}`}
    >
      {props.children}
    </li>
  );
};

export default TipInputPercent;
