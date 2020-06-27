import React from 'react'
import * as Constants from "../Constants";

function Sum(props) {
    let sum = 0;
    let result;
    let selectedFunc = props.function;

    if (selectedFunc === Constants.FUNC_TYPE_SUM) {
        props.value.forEach(value => sum += parseInt(value));
        result = sum;
    } else {
        result = "Not a valid operation";
    }

    return <h5>Sum: {result}</h5>;
}

export default Sum;