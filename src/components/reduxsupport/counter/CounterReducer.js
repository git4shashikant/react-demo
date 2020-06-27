export const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE':
            console.log('Counter reducer activate' + action.title);
            return action.title;
        case 'CLOSE':
            console.log('Counter reducer close' + action.title);
            return {};
        default:
            console.log('Counter reducer default' + state);
            return state;
    }
};