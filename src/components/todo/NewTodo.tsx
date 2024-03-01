import { SetStateAction, useState } from "react"

interface Iprops {
    newTodo: (params: string) => void;
}

export default function NewTodo(props: Iprops) {

    const [todo, setTodo] = useState('');
    function handleOnChange(e: { target: { value: SetStateAction<string> } }) {
        setTodo(e.target.value);
    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        props.newTodo(todo)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo: </label>
                <input type="text" name="todo" id="todo" value={todo} onChange={handleOnChange} />
                <button type="submit">Add New Todo</button>
            </form>
        </div>
    )
}
