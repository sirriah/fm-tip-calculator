import React, { useState, useEffect } from "react";

import classes from "./Form.module.css";
import TipInputs from "./TipInputs";
import DisplayAmounts from "./DisplayAmounts";
import ResetForm from "./ResetForm";

const Form = () => {
  // state for the Bill input
  const [billPrice, setBillPrice] = useState("");

  // state for the Number of People input
  const [numberOfPeople, setNumberOfPeople] = useState("");

  // state for the Custom tip percents
  const [customTip, setCustomTip] = useState("");

  // state for the fixed percents
  const [percentageTip, setPercentageTip] = useState(0);

  // state for the results
  const [tipAmouts, setTipAmounts] = useState({ tipAmount: 0, totalAmount: 0 });

  // resets the inserted values and the results
  const resetButtonChangeHandler = () => {
    setBillPrice("");
    setNumberOfPeople("");
    setCustomTip("");
    setPercentageTip(0);
    setTipAmounts({ tipAmount: 0, totalAmount: 0 });
  };

  /* 
  If any value from the 'billPrice, percentageTip, numberOfPeople' is changed
  the useEffect hook will run.
  */
  useEffect(() => {
    if (+numberOfPeople <= 0) {
      setTipAmounts({ tipAmount: 0, totalAmount: 0 });
    } else {
      const tempTipAmount = (
        (+billPrice * (+percentageTip / 100)) /
        +numberOfPeople
      ).toFixed(2);
      const tempTotalAmount = (
        (+billPrice + +billPrice * (+percentageTip / 100)) /
        +numberOfPeople
      ).toFixed(2);

      if (isNaN(tempTipAmount) || isNaN(tempTotalAmount)) {
        setTipAmounts({
          tipAmount: 0,
          totalAmount: 0,
        });
      } else {
        setTipAmounts({
          tipAmount: tempTipAmount,
          totalAmount: tempTotalAmount,
        });
      }
    }
  }, [billPrice, percentageTip, numberOfPeople]);

  /* 
  TipInputs is the left part with inputs
  DisplayAmounts is the right part with results
  ResetForm is the button which resets the inputs and results  
  */
  return (
    <div className={classes.form}>
      <TipInputs
        onSetBillPrice={setBillPrice}
        onSetNumberOfPeople={setNumberOfPeople}
        onSetCustomTip={setCustomTip}
        onSetPercentageTip={setPercentageTip}
        values={{
          billPrice: billPrice,
          numberOfPeople: numberOfPeople,
          customTip: customTip,
          percentageTip: percentageTip,
        }}
      />
      <div className={classes.displayValuesReset}>
        <DisplayAmounts amounts={tipAmouts} />

        <ResetForm onClick={resetButtonChangeHandler} />
      </div>
    </div>
  );
};

export default Form;
