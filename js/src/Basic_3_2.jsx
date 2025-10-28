import React from 'react'

function Basic_3_2() {
    const Click=(a,b)=>{
        console.log(a)
        console.log(b)
        console.log(a+b)

    };
    const array1=[10,20,30,40,50];
    const array2=[60,70,80,90,100];
    const array3=[110,120,130,140,150];
    const array4=[160,170,180,190,200];
    const comnbinedArray=(array1.concat(array2, array3, array4));
    console.log(array1.concat(array2));
    console.log(comnbinedArray)

    const stringArray=["Apple", "Banana", "Grapes", "Orange", "Pineapple"];
    stringArray.push("Mango, Papaya, Kiwi");
    stringArray.push("Watermelon");
    console.log(stringArray);
    
  return (
    <div>
      <button onClick={()=>Click(14,80)}>Click Me</button>
    </div>
  )
}

export default Basic_3_2
