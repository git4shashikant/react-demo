import {toggleActions, increase, decrease, reset} from "./ToggleActions"

export const toggleReducer = (state, action) => {
    switch(action.type) {
        case toggleActions.INCREASE:
            console.log('reducer increase');
            return increase(state.number);
        case toggleActions.DECREASE:
            console.log('reducer decrease');
            return decrease(state.number);
        case toggleActions.STOP:
            console.log('reducer stop');
            return reset(state.number);
        default:
            return 0;
    }
};