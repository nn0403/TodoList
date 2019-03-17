import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getButtonClickAction = () => ({
    type: ADD_TODO_ITEM
});