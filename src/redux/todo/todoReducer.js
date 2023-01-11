import { GET_TODOS } from "./todoTypes"

const initialTodoState = {
    todo: []
}

export const TodoReducer = (state=initialTodoState, action) => {
    switch (action.type){
        case GET_TODOS: 
            return{
                ...state,
                todo: action.payload
            }
        default : return state
    }
}