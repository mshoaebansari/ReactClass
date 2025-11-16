function Table (props)
{
    return (
        <div>
            <table border="1" cellPadding={"5px"} cellSpacing={"0"}>
                <tr>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>
                        {props.stable[0].name}
                    </td>
                    <td>
                        {props.stable[0].roll}
                    </td>
                    <td>
                        {props.stable[0].age}
                    </td>
                </tr>
                <tr>
                    <td>
                        {props.stable[1].name}
                    </td>
                    <td>
                        {props.stable[1].roll}
                    </td>
                    <td>
                        {props.stable[1].age}
                    </td>
                </tr>
                <tr>
                    <td>
                        {props.stable[2].name}
                    </td>
                    <td>
                        {props.stable[2].roll}
                    </td>
                    <td>
                        {props.stable[2].age}
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Table;