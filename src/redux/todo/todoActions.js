import { GET_TODOS } from "./todoTypes"

export const getTodos = (data) => {
    return {
        type: GET_TODOS,
        payload: data,
    }
}