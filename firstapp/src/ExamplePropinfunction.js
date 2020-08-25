import React from 'react'

export default function ExamplePropinfunction(props) {
    return (
        <div>
            <h1> Its a functional component. </h1>
            {/* My name is  {props.name} and surname is {props.sname} */}
            { props.myname } exam type is { props.exam }
        </div>
    )
}

// rfc shortcut is used to create functional - based components