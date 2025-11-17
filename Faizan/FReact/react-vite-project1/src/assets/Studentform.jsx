import React from "react";

export class Studentform extends React.Component {
    constructor() {
        super();
        this.State = {
            Uname : "",
            Email : "",
            Password : "",
            ConfirmPassword : "",
        }
    }
    display() {
        alert("Your form was Registered");
    }
    render() {
        return (
            <form onSubmit={() => this.display()}>
                <h2>Student Registration Form</h2>

                <input type="text" placeholder="Uname"  onChange={(e) => this.setState({Uname:e.target.value})}
                /> <br />
                <input type="email" placeholder="Email" onChange={(e) => this.setState({Email:e.target.value})}
                /> <br />
                <input type="password" placeholder="Password" onChange={(e) => this.setState({Password:e.target.value})}
 /> <br />
                <input type="password" placeholder="ConfirmPassword" onChange={(e) => this.setState({ConfirmPassword:e.target.value})}
 /> <br />
                <label>Gender:</label> <br />
                <input type="radio" name="gender" value="Male" /> Male 
                <input type="radio" name="gender" value="Female" /> Female
                <br /><br />

                <label>Select Course:</label> <br />
                <select>
                    <option value="">-- Choose Course --</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="NodeJS">NodeJS</option>
                    <option value="Python">Python</option>
                </select>
                <br />
                <input type="button" value="Register" onClick={()=>this.display()} />
            </form>
        );
    }
}
