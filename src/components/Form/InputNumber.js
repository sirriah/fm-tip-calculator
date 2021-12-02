import React from "react";

import classes from "./InputNumber.module.css";

/* I commented the type=number, because the fiedl is validate in the browser in spite of the <form noValidate> */
const InputNumber = (props) => {
  return (
    <div class={props.classWrapper}>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        //type="number"
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        className={`${classes.tipInputNumber} ${props.className} ${
          props.error ? classes.error : ""
        } `}
        placeholder={props.placeholder || 0}
      />
    </div>
  );
};

export default InputNumber;
