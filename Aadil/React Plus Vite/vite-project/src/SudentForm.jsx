import React from 'react';
import './formstyle.css';
    
export class StudentForm extends React.Component {
       
    constructor (){
        super();
        this.state = {
            uname : "",
            uno : "",
            umail : "",
            upass : "",
            upass2 : "",
            gender : "",
            age : "",
            language : ""
        }
    };

    noti()
    {
            alert("Form Submitted Successfully");
        };
        otherFunction()
        {
            
                alert("There is no room for Karan Joher");
        }
    render()
    {
        
        return(
            <div className='formstyle'>
                <form action="">
                    <input type="text" name="uname" placeholder='Username' onChange={(e)=>this.setState({uname:e.target.value})}/> <br />
                    <input type="number" name="uno" placeholder='Number' onChange={(e)=>this.setState({uno:e.target.value})} /> <br />
                    <input type="email" name="umail" id=""  placeholder='Email'  onChange={(e)=>this.setState({umail:e.target.value})}/> <br />
                    <input type="password" name="upass" id=""  placeholder='Enter Password'  onChange={(e)=>this.setState({upass:e.target.value})}/> <br />
                    <input type="password" name="upass2" id=""  placeholder='Re-enter Password'  onChange={(e)=>this.setState({upass2:e.target.value})}/> <br />
                    <p><b>Select Gender</b></p>
                    <label htmlFor="radio" name="male">Male :</label>
                    <input type="radio" name="gender" id=""  onChange={(e)=>this.setState({gender:e.target.value})}/>
                    <label htmlFor="radio" name="female">Female :</label>
                    <input type="radio" name="gender" id=""  onChange={(e)=>this.setState({gender:e.target.value})}/>
                    <label htmlFor="radio" name="other">Other :</label>
                    <input type="radio" name="gender" id="other" onClick={()=>this.otherFunction()}></input><br />
                    <label htmlFor="age"><b>Select Age Group</b></label><br />
                    <select name="age" id=""  onChange={(e)=>this.setState({age:e.target.value})}>
                        <option value="below18">Below 18</option>
                        <option value="18-25">18-25</option>
                        <option value="25-40">25-40</option>
                        <option value="above40">Above 40</option>
                        <option value="above40">Above 60</option>
                        <option value="above40">Above 75</option>
                        <option value="above40">Above 85</option>
                    </select>
                    <p><b>Choose Language</b></p>
                    Python :<input type="checkbox" name="pyhton" id="python" />C++ :<input type="checkbox" name="pyhton" id="python" /><br />
                    Java : <input type="checkbox" name="" id="" />.Net:<input type="checkbox" name="" id="" /> <br />

                    <button onClick={()=>this.noti()}>Submit</button>
        
                </form>
            </div>
        );
    }
}