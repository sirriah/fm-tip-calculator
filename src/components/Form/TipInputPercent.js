import React from 'react';

const TipInputPercent = (props) => {
return(
    <li
          value={props.value}
          name="percent"
          id={`percentage${props.value}`}
          checked={props.checked}
          onClick={props.onClick}
          role="radio" 
          aria-checked={props.checked}
          tabindex="0"
        >
        {props.children}</li>
);
}

export default TipInputPercent;