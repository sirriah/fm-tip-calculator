import React from "react";
import DisplayAmountsField from "./DisplayAmountsField";

const DisplayAmounts = (props) => {
  return (
    <div className="calculator__results">
      <DisplayAmountsField componentName="Tip Amount" per="/ person">
        {props.amounts.tipAmount}
      </DisplayAmountsField>

      <DisplayAmountsField componentName="Total" per="/ person">
        {props.amounts.totalAmount}
      </DisplayAmountsField>
    </div>
  );
};

export default DisplayAmounts;
