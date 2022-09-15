import { useEffect, useState } from 'react'
import "../App.css"
let lastTime = Date.now();
const StateApp = () => {
    const [counter, setCounter] = useState(0)
    const [time, setTime] = useState("Never")
    useEffect( () => {
        let seconds = Date.now() - lastTime
        setTime( seconds ? Math.ceil(seconds/1000) + " seconds ago" : "Never");
        lastTime = Date.now()
    }, [counter])

    return (
        <div className="StateApp">
            <button onClick={ 
                () => {
                    setCounter((prevCount) => { return prevCount - 1 })
                }
            }>-</button>
            <p>Counter value's last change:<span> {time}</span></p>
            <h1>{counter}</h1>
            <button onClick= { () => 
                setCounter((prevCount) => { return prevCount + 1 })
            }>+</button>
        </div>
    )
}

export default StateApp