import { v4 as uuidv4 } from "uuid";
// import { editTask } from "../actions";
import {
    ADD_TASK,
    COMPLETE_TASK,
    EDIT_TASK,
    DELETE_TASK,
    FILTER_TASK,
} from "../constants/action-types";

const initialState = {
    task: [
        { id: uuidv4(), description: "Finish GMC training", isDone: false },
        { id: uuidv4(), description: "Train more and more", isDone: false },
        { id: uuidv4(), description: "Write scientific paper", isDone: false },
        { id: uuidv4(), description: "Publish papers ", isDone: false },
        { id: uuidv4(), description: "Go to shouth Africa ", isDone: false },
    ],
};

function taskReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK:
            return {
                task: [
                    ...state.task,
                    {
                        id: uuidv4(),
                        description: payload.description,
                        isDone: false,
                    },
                ],
            };
        case COMPLETE_TASK:
            return {
                task: state.task.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        case EDIT_TASK:
            return {
                task: state.task.map((task) =>
                    task.id === payload.id
                        ? { ...task, description: payload.newDescription }
                        : task
                ),
            };

        case DELETE_TASK:
            return {
                ...state,
                task: state.task.filter((task) => task.id !== payload),
            };
        case FILTER_TASK:
            return {
                ...state,
                task: payload,
            };
        default:
            return state;
    }
}

export default taskReducer;
