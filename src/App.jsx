import TodoApp from './Components/input'
import Mode from './Components/Mode'


function App() {
  return (
    <>
    <div className='flex bg-primary text-3xl items-center justify-evenly m-3 p-2  '>
    <h1 className="text-3xl font-bold text-center">📝 Task Master</h1>
    <Mode/>
    </div>
   <TodoApp/>
    </>
  )
}

export default App
