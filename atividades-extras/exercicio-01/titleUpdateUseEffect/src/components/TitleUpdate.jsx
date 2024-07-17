import { useState,useEffect } from "react"
import './TitleUpdate.css'

function TitleUpdate() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        document.title = `Contador: ${number}`
        console.log('Fui clicado')
    }, [number]) //Atualiza o titulo sempre que o número mudar

    const increment = () => setNumber(number + 1)
    const decrement = () => setNumber(number - 1)

    return (
        <div className="container">
            <h1>Contador: {number}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default TitleUpdate