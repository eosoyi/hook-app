import React, { useState } from "react";

export const CounterApp = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <>
            <h1>Counter {counter}</h1>
            <hr />
            <button onClick={() => setCounter(counter + 1)} >+1</button>
        </>
    )
}