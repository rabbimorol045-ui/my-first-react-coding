import { useState } from "react"

export default function Counte(){
   const [count, Setcount] = useState(0) ;
   const SetCounts =()=>{
    let LastCount = count +1 ;
    Setcount(LastCount)
   }

   const stykeCount = {
    border: '2px sloid yellow'
   }

  
    return(
        <>
        <div>
            <h1>This is a Counter: {count}</h1>
            <button onClick={SetCounts}>count <menu></menu></button>
        </div>
        </>
    )
}