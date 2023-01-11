import {useSelector} from "react-redux"
import { Register } from "./components/Register/Register"
import { Todo } from "./components/Todo/Todo"

export const App = () => {
    const state = useSelector((state) => state.token)
    
    if(state.token){
        return <Todo />
    }
    else{
        return <Register/>
    }
}