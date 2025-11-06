import react from "react";
import MyContainor from'./Containor.css';
import './Card.js';
import Card from "./Card.js";
function Containor() {
  return (
   <div className="MyContainor">
        <h1>My Containor</h1>
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
}
export default Containor;