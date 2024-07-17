import { useState, useEffect } from 'react'

function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        //Adiciona o evento listener para redimensionamento da janela
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        //Remove o event listener ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    return (
        <div>
            <h1>Largura da Janela: {width}px</h1>
        </div>
    )

}
export default WindowSize