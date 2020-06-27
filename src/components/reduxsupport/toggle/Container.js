import {handleIncrement, handleDecrement, handleStop} from "./ToggleActions";

export const mapStateToProps = (state, props) => ({
    number: props.number
});

export const mapDispatchToProps = (dispatch, props) => ({
    handleIncrement,
    handleDecrement,
    handleStop
});