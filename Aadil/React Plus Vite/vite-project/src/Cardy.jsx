export const Cardy=({students})=>{
   return (<ul>
        {students.map((students)=>{
            return(<div><li>Name : {students.name}, Roll No : {students.roll}, Age : {students.age}</li></div>)
        })}

    </ul>)
}

export const Cardyfy=({students})=>{
   return (<ul>
        {students.map((name, roll, age )=>{
            return(<div><li>Name : {name}, Roll No : {roll}, Age : {age}</li></div>)
        })}

    </ul>)
}