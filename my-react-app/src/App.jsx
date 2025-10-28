import { useState } from "react"


function App() {
  const [number, setnumber] = useState(100);
const [name, setname] = useState("Rocky");
console.log(name)
const changeName = () => {
  setname("John")
}
const changeNumber = () => {
  setnumber(200)
}
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Click Me</button>
      <h1>{number}</h1>
      <button onClick={changeNumber}>Click Me</button>
      
    </div>
  )
}

export default App
