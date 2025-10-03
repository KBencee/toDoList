import CreateToDo from "./components/CreateToDo"
import ToDoList from "./components/ToDoList"

const App = () => {
  return (
    <div>
      <h1>TODO</h1>
      <CreateToDo />
      <ToDoList/>
    </div>
  )
}

export default App