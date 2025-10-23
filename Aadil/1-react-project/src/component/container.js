import React from "react";
import './container.css';
import Card from './card' 
function Container()
{
    return(
        <div className="MyContainer">
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default Container;