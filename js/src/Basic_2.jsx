import React from 'react'

const Basic_2 = () => {
    const numberArray = [12, 24, 36, 48, 60];
    const animalArray = ['Dog', 'Cat', 'Elephant', 'Tiger', 'Lion'];
    console.log("Number Array: ", numberArray[2]);
    console.log("Animal Array: ", animalArray[4]);
  return (
    <div>
      <h1>{numberArray[2]}</h1>
        <h1>{animalArray[1]}</h1>
    </div>
  )
}

export default Basic_2
