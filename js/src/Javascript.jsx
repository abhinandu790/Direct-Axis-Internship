import React from 'react'

// const Javascript = () => {
//   const name = "Rocky"; //String
//   let name2 = "Rambo";
//   var name3 = "Roy";
//   const number = 25; //Number
//   const example = true; //Boolean
//   const test = null; //Null

//   const displayText = () => {
//     document.getElementById("test").innerHTML = "Hi";
//   }
//   const HideText = () => {
//     document.getElementById("test").innerHTML = "";
//   }
//   return (
//     <div>
//         <h1>JavaScipt Basics</h1>
//       <h2>{name}</h2>
//         <h2>{name2}</h2>
//         <h2>{name3}</h2>
//         <h2>{number}</h2>
//         <h2 id="test"></h2>
//         <button onClick={displayText}>Display Text</button>
//         <button onClick={HideText}>Hide Name</button>
        
//     </div>
//   )
// }

// export default Javascript

function Javascript() {
    const number1 = 12;
    const number2 = 20;
    const sum = number1 + number2;
    const sub = number2 - number1;
    const multiplication = number1 * number2;
    const division = number2 / number1;
    console.log("The sum is: " , sum);
    console.log("The substarct is: " , sub);
    console.log("The multiplication is: " , multiplication);
    console.log("The division is: " , division);
  return (
    <div>
      <h1> The sum is : {sum}</h1>
      <h1>The substarct is: {sub}</h1>
      <h1> The multiplication is:{multiplication}</h1>
      <h1> The division is: {division}</h1>
    </div>
  )
}

export default Javascript

