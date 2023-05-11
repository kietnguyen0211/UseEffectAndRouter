import { useEffect, useState } from "react"

export default function TestUseEffect(){

    const calc = () => {
        console.log("calc")
        return 1 - 2 + 3
    }

    const [count,setCount]=useState(() => {
        return calc()
    })

    const [number,setNumber]=useState(0)
    
    useEffect(() => {
        console.log("render")
    },
    [])
    
    const increase = () => {
        setCount(pre => pre+1 )
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase} >Count</button>
        </div>
    )
}
