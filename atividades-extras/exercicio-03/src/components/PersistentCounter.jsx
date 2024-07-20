import { useState, useEffect } from 'react'

function PersistentCounter() {
    const [count, setCount] = useState(
        JSON.parse(localStorage.getItem("count")) || 0
    )

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    return (
        <div>
            <h1>Contador Pesistente: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default PersistentCounter