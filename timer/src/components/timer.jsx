
import { useEffect, useState } from "react";
import "../App.css";

const Timer = ({ initial, final}) => {

    const [count,setCount] = useState(initial);

        useEffect(() => {
            const id = setInterval(() => {
                setCount((prev) => {
                    if(prev === final) {
                        clearInterval(id);
                        return prev;
                    }
                        return prev+1;
                })
            },1000);

            return() => {
                clearInterval(id);
            }
        })

    return (
        <div>
            <div ><h1>TIMER</h1></div>
            <div className="times">
            <h2>Initial Time(seconds): {initial}</h2>
            <h2>Final Time(seconds): {final}</h2>
            </div>
            <div className="timerCount">
                <p>Timer: {count}</p>
            </div>
        </div>
    )
}
export default Timer;