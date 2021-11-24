import React, { useState } from "react";


import classes from "./Form.module.css";
import TipInputs from "./TipInputs";
import DisplayAmounts from "./DisplayAmouns";
import ResetForm from "./ResetForm";

const Form = () => {
  const [tipAmouts, setTipAmounts] = useState({});


  const insertValuesHandler = (tipAmountValue, totalAmountValue) => {
    setTipAmounts({'tipAmount': tipAmountValue, 'totalAmount': totalAmountValue});
  }

 

  
  return (
    <div className={classes.form}>
      <TipInputs onInsertValues={insertValuesHandler} />
    <div>
    <DisplayAmounts amounts={tipAmouts} />

    <ResetForm />
    </div>
    </div>
  );
};

export default Form;
