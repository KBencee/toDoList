import { useState } from "react"
import type { item } from "./ToDoList"

const CreateToDo = () => {
  const [input, setInput] = useState<string>("")

  const sendInput = () => {
    const newTodo : item = {
        id: Math.random(),
        text: input,
        completed: false
    }
  }

  return (
    <div>
        <form className="bevitel">
        <button></button>
        <input type="tex" placeholder={"Create a new todo..."} onChange={(e) => setInput(e.currentTarget.value)}/>
        </form>
    </div>
  )
}

export default CreateToDo