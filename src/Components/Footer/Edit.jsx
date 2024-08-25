import { EditTwoTone } from "@ant-design/icons";

export default function Edit({ element, storingtodo, setstoringtodo }) {
    function buttonclick() {
      const newTodo = prompt("Edit Todo", element);
      if (newTodo) {
        setstoringtodo(storingtodo.map((item) => item === element ? newTodo : item));
      }
    }

    return (
      <button 
        onClick={buttonclick} 
        className='btn btn-ghost bg-emerald-300 border-2 border-green-300 hover:border-green-400  hover:bg-emerald-500 transition duration-300  '>
        
       <EditTwoTone/>
      </button>
    );
}