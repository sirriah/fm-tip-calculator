import React, { useState } from "react";

import TipInputPercent from "./TipInputPercent";

import classes from "./TipInputs.module.css";

const TipInputs = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [percents, setPercents] = useState([5, 10, 15, 25, 50]);
  
  const [billPriceError, setBillPriceError] = useState(false);
  const [customTipError, setCustomTipError] = useState(false);
  const [numberOfPeopleError, setNumberOfPeopleError] = useState(false);
 
  const billPriceChangeHandler = (event) => {
       if(isNaN(+event.target.value) || +event.target.value < 0){
      setBillPriceError(true);
      props.onSetBillPrice(event.target.value);
    } else {
      setBillPriceError(false);
      props.onSetBillPrice(event.target.value);
    }
  };

  const numberPeopleChangeHandler = (event) => {
    if(isNaN(+event.target.value) || +event.target.value < 0){
      setNumberOfPeopleError(true);
      props.onSetNumberOfPeople(event.target.value);
    } else {
      setNumberOfPeopleError(false);
      props.onSetNumberOfPeople(event.target.value);
    }
  };

  const customTipChangeHandler = (event) => {
    if(isNaN(+event.target.value) || +event.target.value < 0){
      setCustomTipError(true);
      props.onSetCustomTip(event.target.value);
    props.onSetPercentageTip(event.target.value);
    } else {
      setCustomTipError(false);
      props.onSetCustomTip(event.target.value);
    props.onSetPercentageTip(event.target.value);
    }
  };

  const percentageTipChangeHandler = (event) => {
      props.onSetPercentageTip(event.target.value);
  };

  

  return (
    <div className={classes.tipInputs}>
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="bill"
        onChange={billPriceChangeHandler}
        value={props.values.billPrice}
        className={`${classes.tipInputNumber} ${billPriceError ? classes.error : ""} `}
        placeholder="0"
        noValidate
      />

      <label htmlFor="customTip">Select Tip %</label>

      <ul className={classes.tipInputPercentGrid} role="radiogroup">


        {percents.map((item) => (
          <TipInputPercent
          value={item}
          checked={+props.values.percentageTip === {item}}
          onClick={percentageTipChangeHandler}
          className=""
          key={item}
        >
          {item}%
        </TipInputPercent>
        ))}


        <TipInputPercent
          value={props.values.customTip}
          id="percentageCustom"
          checked={props.values.percentageTip === "custom"}
          onClick={percentageTipChangeHandler}
          className={classes.tipInputCustomLi}
        >
          <input
            type="number"
            placeholder="custom"
            id="customTip"
            onChange={customTipChangeHandler}
            value={props.values.customTip}
            className={`${classes.tipInputNumber} ${classes.tipInputCustomNumber} ${customTipError ? classes.error : ""} `}
            noValidate
          />
        </TipInputPercent>
      </ul>

      <label htmlFor="numberOfPeople">Number of People</label>
      <input
        type="number"
        id="numberOfPeople"
        onChange={numberPeopleChangeHandler}
        value={props.values.numberOfPeople}
        className={`${classes.tipInputNumber} ${classes.lastMargin} ${numberOfPeopleError ? classes.error : ""} `}
        placeholder="0"
        noValidate
      />
    </div>
  );
};

export default TipInputs;
