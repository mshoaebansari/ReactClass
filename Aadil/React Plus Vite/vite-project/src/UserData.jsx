function UserData(props){
        

    return (
    <div>
        <p style={{color:"blue",}}>
        Name={props.n}<br/>
        Age={props.a}<br/>
        Roll No={props.r}
        </p>
        <p style={{color:"green",}}>
            Marks in English ={props.marks.english}<br/>
            Marks in Math ={props.marks.math}<br/>
            Marks in Science ={props.marks.science}<br/>
            Total Marks ={props.marks.english + props.marks.math + props.marks.science}<br/>
            Result ={(props.marks.english || props.marks.maths || props.marks.science)>= 35? "Pass" : "Fail"}

        </p>
        
    </div>
    
)
}
export default UserData;