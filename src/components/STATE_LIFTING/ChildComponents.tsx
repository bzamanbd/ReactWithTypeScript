interface PropsInterface {
    onChildData: (userData: { name: string, phone: number }) => void;
}

export default function ChildComponents(props: PropsInterface) {
    props.onChildData({ name: 'Jack', phone: 987654321 })
    return (
        <div>
        </div>
    )
}
