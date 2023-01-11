import { combineReducers } from "redux";
import { TodoReducer } from "./todo/todoReducer";
import { TokebReducer } from "./token/tokenReducer";


export const RootRedusers = combineReducers({
    token: TokebReducer,
    todo: TodoReducer,
}) 