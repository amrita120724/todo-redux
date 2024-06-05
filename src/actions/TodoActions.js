export const AddTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const DeleteTodo = (itemId) => {
    return {
        type: "DELETE_TODO",
        payload: {
            id: itemId
        }
    }
}

