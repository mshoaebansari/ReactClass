export const Table=(props)=>{
    console.log(props);
    return (
      <table border="1">
          <tr>
            <th>Roll No</th>
            <th>Name</th>
          </tr>
          {props.sd.map((Student)=>{
            return(
                <tr>
                    <td>{Student.Roll}</td>
                    <td>{Student.Name}</td>
                    
                </tr>
            )
          })}
      </table>
    );
  }
  

  