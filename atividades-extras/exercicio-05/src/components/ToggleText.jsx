import { useState } from 'react'

function ToggleText() {
    const [text, setText] = useState(false)

    const handleClick = () => {
        setText(!text)
    }

    return (
        <div>
            <button onClick={handleClick}>
                {text ? 'Esconder Texto' : 'Mostrar Texto'}
            </button>
            {text && <p>Tudo posso naquele que me fortalece!</p>}
        </div>
    )
}

export default ToggleText