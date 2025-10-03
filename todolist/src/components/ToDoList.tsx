import { useState } from "react"

export interface item {
    id: number;
    text: string;
    completed: boolean;
}

const ToDoList = () => {
    const [todos, setTodos] = useState<item[]>([])

    const completeToDo = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        }))
    }

  return (
    <div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} onClick={() => completeToDo(todo.id)} className="todok">{todo.text}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList