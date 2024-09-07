import { TODO_ACTIONS } from "./action.keys"

const initialState = {
    todoList: []
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
          return {
            todoList: [...state.todoList, action.payload]
        }
        default:
          return state
    }
}