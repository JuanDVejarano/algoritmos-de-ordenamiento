import { useState } from "react";
import "./App.scss";
import InsertionSort from "./Algorithms/InsertionSort/InsertionSort";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <InsertionSort />
        </>
    );
}

export default App;
