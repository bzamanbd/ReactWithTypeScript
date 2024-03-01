import { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";


export default function TodoHome() {
    const initTodos: string[] = ['TodoOne', 'TodoTwo', 'TodoThree'];
    const [todos, setTodos] = useState(initTodos);

    function onGetNewTodo(newTodo: string): void {
        setTodos([...todos, newTodo]);
    }

    return (
        <div>
            <NewTodo newTodo={onGetNewTodo} />
            <Todos todos={todos} />
        </div>
    )
}
