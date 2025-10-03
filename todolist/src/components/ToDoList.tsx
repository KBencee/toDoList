import { useState } from "react"

export interface item {
    id: number;
    text: string;
    completed: boolean;
}

const ToDoList = () => {
    const [input, setInput] = useState<string>("")
    const [todos, setTodos] = useState<item[]>([])

    const completeToDo = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        }))
    }

    const bekuldToDo = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return
        const newTodo: item = {
            id: Date.now(),
            text: input,
            completed: false
        }
        setTodos([...todos, newTodo])
        setInput("")
    }

    return (
        <>
            <div>
                <form className="bevitel" onSubmit={bekuldToDo}>
                    <input type="button" className="check" />
                    <input type="text" placeholder="Create a new todo..." value={input} onChange={(e) => setInput(e.currentTarget.value)}/>
                </form>
            </div>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} className="todok"><input type="checkbox" checked={todo.completed} onChange={() => completeToDo(todo.id)}/>{todo.text}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ToDoList