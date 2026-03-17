import { useState } from "react"

export default function RunCounter (){
     const [runs, setRuns]= useState(0);
     const [sixes, setSixes] = useState(0)
     const [four, setFour]= useState(0);
    const matchCricket =()=>{
   
        const singleRuns = runs + 1 ;
        setRuns(singleRuns)
    }
    const fourCount =()=>{
        const fourCounter = runs + 4;
        const mostFour = four + 1 ;
        setFour(mostFour)
        setRuns(fourCounter)

    }

    const sixCounte =()=>{
        const sixCounter = runs + 6;
        const mostSix = sixes +1 ;
        setSixes(mostSix)
        setRuns(sixCounter)
    }
return(
    <>
    <p><small>All four: {four}</small></p>
    <p><small>All Six: {sixes}</small></p>
    {
      runs >50 && <p>Your score is 50</p>
    }
    <div>
        <h1> The criclet match:{runs}</h1><br />
        <button onClick={matchCricket}>single Run</button><br />
        <button onClick={ fourCount}>Four Count</button><br />
        <button onClick={ sixCounte}>Six Count</button><br />

    </div>
    
    </>
)

}

   