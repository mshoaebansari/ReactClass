import React from 'react';
import './formstyle.css';
    
export class StudentForm extends React.Component {
       
    constructor (){
        super();
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
                    <input type="text" placeholder='Username'/> <br />
                    <input type="number" placeholder='Number' /> <br />
                    <input type="email" name="" id=""  placeholder='Email' /> <br />
                    <input type="password" name="" id=""  placeholder='Enter Password'/> <br />
                    <input type="password" name="" id=""  placeholder='Re-enter Password'/> <br />
                    <p><b>Select Gender</b></p>
                    <label htmlFor="radio">Male :</label>
                    <input type="radio" name="gender" id="" />
                    <label htmlFor="radio">Female :</label>
                    <input type="radio" name="gender" id="" />
                    <label htmlFor="radio">Other :</label>
                    <input type="radio" name="gender" id="other" onClick={()=>this.otherFunction()}></input><br />
                    <label htmlFor="age"><b>Select Age Group</b></label><br />
                    <select name="age" id="">
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