import React, { useEffect, useState } from "react";

import TipInputPercent from "./TipInputPercent";

import classes from "./TipInputs.module.css";

const InputTip = (props) => {
  const [billPrice, setBillPrice] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [percentageTip, setPercentageTip] = useState(0);

  const billPriceChangeHandler = (event) => {
    setBillPrice(event.target.value);
  };

  const numberPeopleChangeHandler = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const customTipChangeHandler = (event) => {
    setCustomTip(event.target.value);
    setPercentageTip(event.target.value);
  };

  const percentageTipChangeHandler = (event) => {
      setPercentageTip(event.target.value);
  };

  useEffect(() => {
    if (+numberOfPeople <= 0) {
      props.onInsertValues(0, 0);
    } else {
      props.onInsertValues(
        (+billPrice * (+percentageTip / 100)) / +numberOfPeople,
        (+billPrice + +billPrice * (+percentageTip / 100)) / +numberOfPeople
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billPrice, percentageTip, numberOfPeople]);

  return (
    <div className={classes.tipInputs}>
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="bill"
        onChange={billPriceChangeHandler}
        value={billPrice}
      />

      <label htmlFor="customTip">Select Tip %</label>

      <ul className="calculator__buttons-grid" role="radiogroup">
        <TipInputPercent
          value="5"
          checked={+percentageTip === 5}
          onClick={percentageTipChangeHandler}
        >
          5%
        </TipInputPercent>

        <TipInputPercent
          value="10"
          checked={+percentageTip === 10}
          onClick={percentageTipChangeHandler}
        >
          10%
        </TipInputPercent>

        <TipInputPercent
          value="15"
          checked={+percentageTip === 15}
          onClick={percentageTipChangeHandler}
        >
          15%
        </TipInputPercent>

        <TipInputPercent
          value="25"
          checked={+percentageTip === 25}
          onClick={percentageTipChangeHandler}
        >
          25%
        </TipInputPercent>

        <TipInputPercent
          value="50"
          checked={+percentageTip === 50}
          onClick={percentageTipChangeHandler}
        >
          50%
        </TipInputPercent>

        <TipInputPercent
          value={customTip}
          id="percentageCustom"
          checked={percentageTip === "custom"}
          onClick={percentageTipChangeHandler}
        >
          <input
            type="number"
            placeholder="custom"
            id="customTip"
            onChange={customTipChangeHandler}
            value={customTip}
          />
        </TipInputPercent>
      </ul>

      <label htmlFor="numberOfPeople">Number of People</label>
      <input
        type="number"
        id="numberOfPeople"
        onChange={numberPeopleChangeHandler}
        value={numberOfPeople}
      />
    </div>
  );
};

export default InputTip;
