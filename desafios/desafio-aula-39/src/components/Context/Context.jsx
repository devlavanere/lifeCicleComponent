import { createContext } from "react"

//Cria um contexto chamado "MyContext" usando o hook "createContext"
//Isso cria um objeto que pode ser usado para compartilhar dados e funções entre componentes
export const MyContext = createContext()

//Define um componente de provedor chamado "MyProvider" que irá fornecer dados ao contexto
export const MyProvider = (props) => {

    //Retorna um componente "MyContent.Provider" que envolve os filhos do componente
    //O atributo "value" define os dados que serão compartilhados no contexto.
    //Neste caso, o valor é um objeto com uma propriedade "name" definida como "João"
    return (
        <MyContext.Provider value={{ name: 'João' }}>
            {/*O atributo "children" recebe os filhos do componente "MyProvider".*/}
            {/*Isso garante que os filhos tenham acesso ao contexto*/}
            {props.children}
        </MyContext.Provider>
    )
}