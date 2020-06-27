import {handleActivate, handleClose} from "./Actions";

export const mapDispatchToProps = {
    handleActivate,
    handleClose
};

export const mapStateToProps = state => ({
    counterReducer: state.counterReducer
});