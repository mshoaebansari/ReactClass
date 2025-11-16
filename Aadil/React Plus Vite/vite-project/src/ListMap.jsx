function ListMap(props) {
    return (<ul>
        {props.st.map((x)=>{
            return(<div><li>Name : {x.name}, Roll No : {x.roll}, Age : {x.age}</li></div>)
        })}

    </ul>)
}
export default ListMap;