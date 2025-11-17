function UserData(props) {
    const total = props.e.maths + props.e.science + props.e.english;
    const result = props.e.maths < 35 || props.e.science < 35 || props.e.english < 35 ? "Fail" : "Pass";
  
    return (
      <div>
        <p style={{ color: 'blue', fontSize: '20px', fontWeight: 'bold' }}>
          User Name: {props.u} <br />
          Age: {props.a} <br />
          Gender: {props.g}
        </p>
  
        <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>
          Marks in Maths: {props.e.maths} <br />
          Marks in Science: {props.e.science} <br />
          Marks in English: {props.e.english} <br />
        </p>
  
        <p>
          Result: {result}
        </p>
      </div>
    );
  }
  
  export default UserData;
  