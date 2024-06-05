import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, DeleteTodo} from "./actions/TodoActions";

// import { addTodo } from "./features/todo";

function App() {
  const [inputVal, setinputVal] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.Todo.listOfTodos);
  console.log(todoList);

  

  return (
    <div className="App">
      <div className="input-div">
        <input
          type="text"
          placeholder="Add New Todo..."
          value={inputVal}
          onChange={(e) => setinputVal(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(AddTodo(inputVal));
            setinputVal("");
          }}
        >
          Add Todo
        </button>
      </div>
      <div>
        <h3>ToDo List</h3>
        <ul>{todoList && todoList.map(item=> (
          <li key={item.id}>{item.data}<button onClick={()=>dispatch(DeleteTodo(item.id))}>Delete</button></li>
        ))}</ul>
      </div>
    </div>
  );
}

export default App;
