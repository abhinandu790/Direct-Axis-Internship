import React from 'react'

const Basic_3 = () => {
    const object = {name: "Abhi", age: 22, city: "Thrissur"};
    // console.log("Object Name: ", object.name);
    // console.log("Object Age: ", object.age);
    // console.log("Object City: ", object.city);
    object.gender="Female";
    console.log(object);
    console.log(10**3);
    const text="Hello World! Welcome to My World";
    console.log(text.slice(13,32));
  return (
    <div>
        <h1>Name: {object.name}</h1>
        <h1>Age: {object.age}</h1>
        <h1>City: {object.city}</h1>
        <h1>Gender: {object.gender}</h1>


        <h1>{text.slice(0,12)}</h1>
    </div>
  )
}

export default Basic_3
