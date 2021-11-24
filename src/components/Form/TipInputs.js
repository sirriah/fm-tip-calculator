import React from "react";

import TipInputPercent from "./TipInputPercent";

import classes from "./TipInputs.module.css";

const TipInputs = (props) => {
  

  const billPriceChangeHandler = (event) => {
    props.onSetBillPrice(event.target.value);
  };

  const numberPeopleChangeHandler = (event) => {
    props.onSetNumberOfPeople(event.target.value);
  };

  const customTipChangeHandler = (event) => {
    props.onSetCustomTip(event.target.value);
    props.onSetPercentageTip(event.target.value);
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
      />

      <label htmlFor="customTip">Select Tip %</label>

      <ul className="calculator__buttons-grid" role="radiogroup">
        <TipInputPercent
          value="5"
          checked={+props.values.percentageTip === 5}
          onClick={percentageTipChangeHandler}
        >
          5%
        </TipInputPercent>

        <TipInputPercent
          value="10"
          checked={+props.values.percentageTip === 10}
          onClick={percentageTipChangeHandler}
        >
          10%
        </TipInputPercent>

        <TipInputPercent
          value="15"
          checked={+props.values.percentageTip === 15}
          onClick={percentageTipChangeHandler}
        >
          15%
        </TipInputPercent>

        <TipInputPercent
          value="25"
          checked={+props.values.percentageTip === 25}
          onClick={percentageTipChangeHandler}
        >
          25%
        </TipInputPercent>

        <TipInputPercent
          value="50"
          checked={+props.values.percentageTip === 50}
          onClick={percentageTipChangeHandler}
        >
          50%
        </TipInputPercent>

        <TipInputPercent
          value={props.values.customTip}
          id="percentageCustom"
          checked={props.values.percentageTip === "custom"}
          onClick={percentageTipChangeHandler}
        >
          <input
            type="number"
            placeholder="custom"
            id="customTip"
            onChange={customTipChangeHandler}
            value={props.values.customTip}
          />
        </TipInputPercent>
      </ul>

      <label htmlFor="numberOfPeople">Number of People</label>
      <input
        type="number"
        id="numberOfPeople"
        onChange={numberPeopleChangeHandler}
        value={props.values.numberOfPeople}
      />
    </div>
  );
};

export default TipInputs;
