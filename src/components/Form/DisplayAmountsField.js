import React from 'react';

const DisplayAmountsField = (props) => {
    return(
        <div className="tip-amount">
          <div>
            <h2>{props.componentName}</h2>
            <p>{props.per}</p>
          </div>
          <div>${props.children}</div>
        </div>
    );
}

export default DisplayAmountsField;