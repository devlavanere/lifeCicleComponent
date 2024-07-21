import { useState } from 'react'

function LimitedCounter() {
    const [count, setCount] = useState(0)
    const limitCount = 10

    const handleIncrement = () => {
        if(count < limitCount) {
            setCount(count + 1)
        } else {
            alert('Limite atingido!')
        }
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default LimitedCounter