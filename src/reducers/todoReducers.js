import React from 'react'

const initialState = {
    listOfTodos : [],
    
   
}

const TodoReducers = (state = initialState, action) => {

    switch(action.type){
        case "ADD_TODO":
            const {id, data} = action.payload;
            // state.listOfTodos.push({id, data})
            return {
                ...state,
                listOfTodos: [
                    ...state.listOfTodos,
                    {
                        data, id
                    }
                ]
            }

        case "DELETE_TODO":
            const newList = state.listOfTodos.filter(item=> item.id !== action.payload.id)
            return {
                ...state,
                listOfTodos: newList
            }

        default: 
            return state

    }
  
}

export default TodoReducers;