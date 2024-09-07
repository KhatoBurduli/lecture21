import { TODO_ACTIONS } from "./action.keys";

export const addTodoAction = (payload) => ({
    type: TODO_ACTIONS.ADD_TODO,
    payload
})