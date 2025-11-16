function List (props)
{
    return (
        <div>
            <h1>Students Data</h1>
            <ul>
                <li>Name: {props.s[0].name} Roll: {props.s[0].roll} Age {props.s[0].age}</li>
                <li>Name: {props.s[1].name} Roll: {props.s[1].roll} Age {props.s[1].age}</li>
                <li>Name: {props.s[2].name} Roll: {props.s[2].roll} Age {props.s[2].age}</li>
            </ul>
        </div>
    );
}
export default List;