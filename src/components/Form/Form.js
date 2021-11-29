import React, { useState, useEffect } from "react";

import classes from "./Form.module.css";
import TipInputs from "./TipInputs";
import DisplayAmounts from "./DisplayAmounts";
import ResetForm from "./ResetForm";

const Form = () => {
  const [billPrice, setBillPrice] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [percentageTip, setPercentageTip] = useState(0);
  const [tipAmouts, setTipAmounts] = useState({"tipAmount" : 0, "totalAmount" : 0});

  const resetButtonChangeHandler = () => {
    setBillPrice("");
    setNumberOfPeople("");
    setCustomTip("");
    setPercentageTip(0);
    setTipAmounts({"tipAmount" : 0, "totalAmount" : 0});
  }
 
  useEffect(() => {
    if (+numberOfPeople <= 0) {
      setTipAmounts({"tipAmount" : 0, "totalAmount" : 0});
    } else {
      setTipAmounts({
        "tipAmount" : ((+billPrice * (+percentageTip / 100)) / +numberOfPeople),
        "totalAmount" : (+billPrice + +billPrice * (+percentageTip / 100)) / +numberOfPeople
      }
      );
    }
  }, [billPrice, percentageTip, numberOfPeople]);

  return (
    <div className={classes.form}>
      <TipInputs 
        onSetBillPrice={setBillPrice}
        onSetNumberOfPeople={setNumberOfPeople}
        onSetCustomTip={setCustomTip}
        onSetPercentageTip={setPercentageTip}
        values={{'billPrice': billPrice, 
                 'numberOfPeople': numberOfPeople, 
                 'customTip': customTip, 
                 'percentageTip': percentageTip}}
        />
      <div className={classes.displayValuesReset}>
        <DisplayAmounts amounts={tipAmouts} />

        <ResetForm onClick={resetButtonChangeHandler}/>
      </div>
    </div>
  );
};

export default Form;
