import { useState } from "react";
import Button from "./button";
import Taskcount from "./Taskcount";
import Footer from "./Footer/Footer";
import Edit from "./Footer/Edit";
import Add from "./Add";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [storingTodo, setStoringTodo] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState({});

  function handleChange(event) {
    setTodo(event.target.value);
  }


  function handleBtnClick() {
    if (todo.trim()) {
      const newTodoIndex = storingTodo.length;
      setStoringTodo([...storingTodo, todo]);
      setCheckedTodos({ ...checkedTodos, [newTodoIndex]: false }); 
      setTodo(""); 
    }
  }


  function handleCheckboxChange(index) {
    setCheckedTodos((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  function handleDelete(index) {
    const updatedTodos = storingTodo.filter((_, i) => i !== index);
    setStoringTodo(updatedTodos);

    const updatedCheckedTodos = { ...checkedTodos };
    delete updatedCheckedTodos[index];

    
    const reassignedCheckedTodos = updatedTodos.reduce((acc, _, i) => {
      acc[i] = updatedCheckedTodos[i] ?? false;
      return acc;
    }, {});
    setCheckedTodos(reassignedCheckedTodos);
  }

  const checkedCount = Object.values(checkedTodos).filter(Boolean).length;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl p-5 h-screen rounded-xl shadow-2xl shadow-black">
        <h1 className="text-2xl font-semibold  text-center">
          <Taskcount storingTodo={storingTodo.length} count={checkedCount} />
        </h1>

        <div className="mb-3 flex">
          <input
            type="text"
            value={todo}
            onChange={handleChange}
            placeholder="Enter Todo"
            className="input input-bordered w-full p-3 border-gray-950 rounded-lg"
          />

<button
          onClick={handleBtnClick}
          className="btn btn-circle btn-secondary mx-2 border-black  rounded-lg"
        >
           <Add/>
        </button>
        </div>

        

        <ul className="mt-4 space-y-2">
          {storingTodo.map((item, index) => (
            <li
              className="flex justify-between items-center p-2 border border-sky-300 rounded-lg shadow-lg "
              key={index}
            >
              <span className="font-bold flex">
                <input
                  type="checkbox"
                  className="mx-2 checkbox checkbox-success"
                  checked={checkedTodos[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
                {item}
              </span>
              <div className="flex gap-3">
                <Edit
                  element={item}
                  setstoringtodo={setStoringTodo}
                  storingtodo={storingTodo}
                />
                <Button index={index} handleDelete={handleDelete} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
    
  );
}

export default TodoApp;
