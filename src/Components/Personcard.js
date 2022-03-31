import React from "react";
const Personcard = (props) => {
    return (
        <div>
            <h1>{props.LastName} , {props.FirstName}</h1>
            <h3>Age: {props.Age}</h3>
            <h3>Hair Color: {props.HairColor}</h3>
        </div>
    )
}

export default Personcard;