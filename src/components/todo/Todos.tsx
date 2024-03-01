import Todo from "./Todo";

interface Iprops {
    todos: string[];
}

export default function Todos(props: Iprops) {
    const todoList: string[] = props.todos;
    console.log(todoList);

    return (
        <div>
            {todoList.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    )
}
