import React, { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("");
    const fullName = firstName + " " + lastName;

    const handleIncreaseAge = () => {
        console.log("in handleIncreaseAge (before setPerson call): ", person);
        setPerson({ ...person, age: person.age + 1 });
        // we've called setPerson, surely person has updated?
        console.log("in handleIncreaseAge (after setPerson call): ", person);
    };

    function firstNameInput(event) {
        const newFirstName = event.target.value;
        setFirstName(newFirstName);
        setPerson({ ...person, name: `${newFirstName} ${lastName}` });
    }

    function lastNameInput(event) {
        const newLastName = event.target.value;
        setLastName(newLastName);
        setPerson({ ...person, name: `${firstName} ${newLastName}` });
    }

    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);

    return (
        <>
        {/* <h1>{fullName}</h1> */}
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
        <br/>
        <input placeholder="First name" 
            onChange={firstNameInput}
        />
        <input placeholder="Last name" 
            onChange={lastNameInput}
        />
        </>
    );
}

export default Person