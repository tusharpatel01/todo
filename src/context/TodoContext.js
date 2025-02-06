import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            Todo:"first message to complete",
            completed:false,

        }

    ],
    addTodo:(todo)=>{},
    updateTodo:(todo ,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider

