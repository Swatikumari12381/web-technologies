import { useState } from "react";

function Counter() {
    const [count, setcount] = useState(0);
    return(
        <div style={{textAlign: "center", marginTop: "40px"}}>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => setcount(count +1)}>+</button>
            <button onClick={() => setcount(count -1)} style={{margin: "0 10px"}}>-</button>
            <button onClick={() => setcount(0)}>Reset</button>
        </div>
    )
}
export default Counter;