import React from 'react';

const ResetForm = (props) => {
return(
    <button className="reset" onClick={props.onClick}>Reset</button>
);
}

export default ResetForm;