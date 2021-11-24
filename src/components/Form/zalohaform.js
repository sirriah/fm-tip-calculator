/* import React, { useEffect, useState } from "react";

import classes from "./Form.module.css";
import InputTip from "./TipInputs";

const Form = (props) => {
  const [billPrice, setBillPrice] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [percentageTip, setPercentageTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const billPriceChangeHandler = (event) => {
    setBillPrice(event.target.value);
  };

  const numberPeopleChangeHandler = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const customTipChangeHandler = (event) => {
    setCustomTip(event.target.value);
  };

  const percentageTipChangeHandler = (event) => {
    setPercentageTip(event.target.value);
  };

  useEffect(() => {
    if (+numberOfPeople <= 0) {
      setTipAmount(0);
      setTotalAmount(0);
    } else {
      setTipAmount((+billPrice * (+percentageTip / 100)) / +numberOfPeople);
      setTotalAmount(
        (+billPrice + +billPrice * (+percentageTip / 100)) / +numberOfPeople
      );
    }
  }, [billPrice, percentageTip, numberOfPeople]);

  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          id="bill"
          onChange={billPriceChangeHandler}
          value={billPrice}
        />

        <label htmlFor="customTip">Select Tip %</label>
        
        <div className="calculator__buttons-grid">
          <input
            type="radio"
            value="5"
            name="percent"
            id="percentage5"
            checked={+percentageTip === 5}
            onChange={percentageTipChangeHandler}
          />
          <label htmlFor="percentage5">5%</label>

          <input
            type="radio"
            value="10"
            name="percent"
            id="percentage10"
            checked={+percentageTip === 10}
            onChange={percentageTipChangeHandler}
          />
          <label htmlFor="percentage10">10%</label>

          <input
            type="radio"
            value="15"
            name="percent"
            id="percentage15"
            checked={+percentageTip === 15}
            onChange={percentageTipChangeHandler}
          />
          <label htmlFor="percentage15">15%</label>

          <input
            type="radio"
            value="25"
            name="percent"
            id="percentage25"
            checked={+percentageTip === 25}
            onChange={percentageTipChangeHandler}
          />
          <label htmlFor="percentage25">25%</label>

          <input
            type="radio"
            value="50"
            name="percent"
            id="percentage50"
            checked={+percentageTip === 50}
            onChange={percentageTipChangeHandler}
          />
          <label htmlFor="percentage50">50%</label>

          <input
            type="radio"
            value="custom"
            name="percent"
            id="percentageCustom"
            checked={percentageTip === "custom"}
            onChange={percentageTipChangeHandler}
          />
          <label htmlFor="percentageCustom">
            <input
              type="number"
              placeholder="custom"
              id="customTip"
              onChange={customTipChangeHandler}
              value={customTip}
            />
          </label>
        </div>
        <label htmlFor="numberOfPeople">Number of People</label>
        <input
          type="number"
          id="numberOfPeople"
          onChange={numberPeopleChangeHandler}
          value={numberOfPeople}
        />
      </div>

      <div className="calculator__results">
        <div className="tip-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <div>${tipAmount}</div>
        </div>
        <div>
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <div>${totalAmount}</div>
        </div>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Form;
 */