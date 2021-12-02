import React, { useState } from "react";

import TipInputPercent from "./TipInputPercent";
import InputNumber from "./InputNumber";

import classes from "./TipInputs.module.css";

const TipInputs = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [percents, setPercents] = useState([5, 10, 15, 25, 50]);

  const [billPriceError, setBillPriceError] = useState(false);
  const [customTipError, setCustomTipError] = useState(false);
  const [numberOfPeopleError, setNumberOfPeopleError] = useState(false);

  // check if the inserted value is a number or if it is greater than 0
  const billPriceChangeHandler = (event) => {
    if (isNaN(+event.target.value) || +event.target.value < 0) {
      setBillPriceError(true);
      props.onSetBillPrice(event.target.value);
    } else {
      setBillPriceError(false);
      props.onSetBillPrice(event.target.value);
    }
  };

  const numberPeopleChangeHandler = (event) => {
    if (isNaN(+event.target.value) || +event.target.value < 0) {
      setNumberOfPeopleError(true);
      props.onSetNumberOfPeople(event.target.value);
    } else {
      setNumberOfPeopleError(false);
      props.onSetNumberOfPeople(event.target.value);
    }
  };

  const customTipChangeHandler = (event) => {
    if (isNaN(+event.target.value) || +event.target.value < 0) {
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
    props.onSetPercentageTip(event.target.getAttribute("data-value"));
  };

  /* accessibility = press the input percents with spacebar */
  const onKeyPressHandler = (event) => {
    if (event.key === " ") {
      props.onSetPercentageTip(event.target.value);
    }
  };

  return (
    <div className={classes.tipInputs}>
      <InputNumber
        id="bill"
        value={props.values.billPrice}
        error={billPriceError}
        onChange={billPriceChangeHandler}
        classWrapper={classes.dolar}
      >
        Bill
      </InputNumber>

      <label htmlFor="customTip">Select Tip %</label>

      <ul className={classes.tipInputPercentGrid} role="radiogroup">
        {percents.map((item) => (
          <TipInputPercent
            value={item}
            checked={+props.values.percentageTip === item}
            onClick={percentageTipChangeHandler}
            onKeyPress={onKeyPressHandler}
            className=""
            key={item}
          >
            {item}%
          </TipInputPercent>
        ))}
        <li>
          <InputNumber
            id="customTip"
            value={props.values.customTip}
            error={customTipError}
            onChange={customTipChangeHandler}
            className={classes.tipInputCustomNumber}
            placeholder="custom"
          ></InputNumber>
        </li>
      </ul>

      <InputNumber
        id="numberOfPeople"
        value={props.values.numberOfPeople}
        error={numberOfPeopleError}
        onChange={numberPeopleChangeHandler}
        className={classes.lastMargin}
        classWrapper={classes.people}
      >
        Number of People
      </InputNumber>
    </div>
  );
};

export default TipInputs;
