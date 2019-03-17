

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    if (action.type === 'CHANGE_INPUT_VALUE') {
        const newState = JSON.parse(JSON.stringify(state));

        newState.inputValue = action.inputValue;

        return newState;
    }

    if (action.type === 'ADD_TODO_ITEM') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...state.list, state.inputValue];

        return newState;
    }
}