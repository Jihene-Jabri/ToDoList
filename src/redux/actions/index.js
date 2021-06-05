import {
    ADD_TASK,
    COMPLETE_TASK,
    EDIT_TASK,
    DELETE_TASK,
    FILTER_TASK,
} from "../constants/action-types";

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload,
    };
};

export const completeTask = (payload) => {
    return {
        type: COMPLETE_TASK,
        payload,
    };
};

export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload,
    };
};
export const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload,
    };
};
export const filterTask = (payload) => {
    return {
        type: FILTER_TASK,
        payload,
    };
};
