interface Iprops {
    todo: string;
}

export default function Todo(props: Iprops) {
    const todo = props.todo;
    return (
        <div>
            <h4>{todo}</h4>
        </div>
    )
}
