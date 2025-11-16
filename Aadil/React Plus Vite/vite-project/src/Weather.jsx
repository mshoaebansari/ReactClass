function Weather(props) {
    
    
    return (<div>
        <br/>
        <table border="1" cellSpacing={"0"} cellPadding={"10"}>
            <th>A</th><th>B</th>
            <tr>
                <td>City</td>
                <td>{props.weater[0].city}</td>
            </tr>
            <tr>
                <td>Real Feel</td>
                <td>{props.weater[0].realfeel}</td>
            </tr>
            <tr>
                <td>Wind</td>
                <td>{props.weater[0].wind}</td>
            </tr>
            <tr>
                <td>Wind Gusts</td>
                <td>{props.weater[0].windgusts}</td>
            </tr>
            <tr>
                <td>Humidity</td>
                <td>{props.weater[0].humidity}</td>
            </tr>
            <tr>
                <td>Air Quality</td>
                <td>{props.weater[0].airquality}</td>
            </tr>
        </table>
    </div>)
}
export default Weather;