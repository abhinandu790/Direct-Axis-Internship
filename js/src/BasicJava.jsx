import React from 'react'

const BasicJava = () => {
    const number1 = 12;
    const number2 = 24;

    function Addition() {
        document.getElementById("test").innerHTML=
        "Addition Value = "+ " " +parseInt(number1 + number2)
    };
    // const Addition=()=>{
    //     document.getElementById("test").innerHTML= number1 + number2
    // };
    const Subtraction=()=>{
        document.getElementById("test").innerHTML= 
        "Subtraction value = " +" "+parseInt(number2 - number1)
    }
    const Multiplication=()=>{
        document.getElementById("test").innerHTML= 
        "Multiplication Value = "+" "+number1 * number2
    }
    const Division=()=>{
        document.getElementById("test").innerHTML=
        "Division Value = "+ " "+ number2 / number1.toFixed(1)
    }

  return (
    <div>
        <h1>Number 1-{number1}</h1>
        <h1>Number 2-{number2}</h1>
      <h1 id="test"></h1>
      <button onClick={Addition}>Addition</button>
      <button onClick={Subtraction}>Subtraction</button>
      <button onClick={Multiplication}>Multiplication</button>
      <button onClick={Division}>Division</button>
    </div>
  )
}

export default BasicJava
