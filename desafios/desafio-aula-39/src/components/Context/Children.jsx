import { useContext } from 'react' //Importa o hook useContext do React, que permite acessar os dados fornecidos por um contexto.
import { MyContext } from './Context'

//Define um componente funcional chamado "MyChildren"
const MyChildren = () => {

    //Usa o hook useContext para acessar o contexto MyContext.
    //MyContext é importado do arquivo './Context, ele define um contexto usando createContext.
    const context = useContext(MyContext)

    //Retorna uma div que exibe uma mensagem com o nome do usuário.
    //A mensagem usa a propriedade 'name' do objeto context, que é fornecido pelo contexto MyContext.
    return <div>Meu nome é {context.name}</div>
}

export default MyChildren