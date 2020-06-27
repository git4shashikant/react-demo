export const toggleActions = {
    INCREASE: 'handleIncrement',
    DECREASE: 'handleDecrement',
    STOP: 'handleStop'
};

export const handleIncrement = () => ({
    type: toggleActions.INCREASE
});

export const handleDecrement = () => ({
    type: toggleActions.DECREASE
});

export const handleStop = () => ({
    type: toggleActions.STOP
});

export function increase (number) {
    console.log('function increase' + number);
    return number + 1
}

export function decrease(number) {
    console.log('function decrease' + number);
    return number -1;
}

export function reset(number) {
    console.log('function reset' + number);
    return 0;
}