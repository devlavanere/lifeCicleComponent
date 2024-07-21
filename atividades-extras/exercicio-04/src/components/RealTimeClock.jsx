import { useState, useEffect } from 'react'

function RealTimeClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        console.log('fui atualizado')
        //Limpa o intervalo após o componente ser desmontado
        return () => clearInterval(intervalId)
    }, [time])
    
    //Formatar a hora
    const formattedTime = time.toLocaleTimeString()

    return (
        <div>
            <h1>{formattedTime}</h1>
        </div>
    )

}

export default RealTimeClock