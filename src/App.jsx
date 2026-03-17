import RunCounter from './Runs'
import './App.css'
import Counte from './Counter'

function App() {
  function handleClick (){
    alert('I am clicked')
  }
  const havyClick = () =>{
    alert('the confiremd')
  }
  const numberCount = (num) =>{
   const Number = num + 10;
    alert('The result is =', Number)
  }


  return (
    <>
  
  <RunCounter></RunCounter>
    <Counte></Counte>
  
  
    <h1>This is a react page </h1>
    <button onClick={handleClick}>Click Me-1</button>
    <button onClick={havyClick} >Click Me-1</button>
    <button onClick={() => numberCount (10)}>Click Me-1</button>
    </>
  )
}

export default App
