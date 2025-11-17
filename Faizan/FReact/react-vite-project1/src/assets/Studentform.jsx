import React from "react";

export class Studentform extends React.Component {
    display() {
        alert("Your form was Registered");
    }
    render() {
        return (
            <form onSubmit={() => this.display()}>
                <h2>Student Registration Form</h2>

                <input type="text" placeholder="User Name" /> <br />
                <input type="email" placeholder="User Email" /> <br />
                <input type="password" placeholder="User Password" /> <br />
                <input type="password" placeholder="Confirm Password" /> <br />
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
                <input type="submit" value="Register" />
            </form>
        );
    }
}
