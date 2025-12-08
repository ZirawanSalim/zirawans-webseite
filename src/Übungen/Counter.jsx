import React, { useReducer } from 'react';
import { counterReducer } from './counterReducer';

export default function Counter() {

    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
console.log(state.count);

    return (
        <div>
            <h2>Count: {state.count}</h2>

            <button onClick={() => dispatch({ type: "plus5" })}>
                +5
            </button>
            <button onClick={() => dispatch({ type: "minus5" })}>
                -5
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: "increment" })}>
                +1
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                -1
            </button>

        </div>
    );
}