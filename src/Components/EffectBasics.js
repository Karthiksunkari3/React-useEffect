import React from 'react';
import { useState ,useEffect} from 'react';



const EffectBasics =() =>{

    let [a,setA] = useState(0);
    let [b,setB] = useState(0);
    let [c,setC] = useState(0);

useEffect(() => {
    console.log("useEffect is called");
    
document.title = `A: ${a} B: ${b} C: ${c}`; 
},[a,b,c]
)
    return (
        <div>
            <h1>A: {a} B: {b} C: {c} </h1>
            <button onClick={() => setA(a+1)}>Increase A</button>
            <button onClick={() => setB(b+1)}>Increase B</button>
            <button onClick={() => setC(c+1)}>Increase C</button>
        </div>
    )

}

export default EffectBasics;