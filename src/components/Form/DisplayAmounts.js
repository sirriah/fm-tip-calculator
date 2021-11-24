import React from 'react';

const DisplayAmounts = (props) => {

    return(
        <div className="calculator__results">
        <div className="tip-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <div>${props.amounts.tipAmount}</div>
        </div>
        <div>
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <div>${props.amounts.totalAmount}</div>
        </div>
      </div>
    );
}

export default DisplayAmounts;