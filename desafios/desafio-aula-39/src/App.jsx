
//import MyChildren from './components/Context/Children'
//import { MyProvider } from './components/Context/Context'
import { useState, createContext, useContext } from 'react'

// Cria um contexto chamado "PreferencesContext" usando "createContext".
// Esse contexto será usado para compartilhar as preferências entre os componentes.
const PreferencesContext = createContext()

// Define o componente principal "App" que irá gerenciar as preferências.
function App() {
  // Define o estado inicial das preferências usando "useState".
  // As preferências incluem o tema e o idioma.
  const [ preferences, setPreferences ] = useState({ theme: 'light', language: 'en'})

  // 4. Função para alternar o tema.
  // Atualiza o estado "preferences" com o tema inverso.
  const toggleTheme = () => {
    setPreferences(currentTheme => ({
      theme: currentTheme.theme === 'light' ? 'dark' : 'light'}))
  }

  // Função para mudar o idioma.
  // Atualiza o estado "preferences" com o novo idioma.
  const changeLanguage = (language) => {
    setPreferences(currentLanguage => ({
      ...currentLanguage, // Mantém as outras preferências
      language: language
    }))
  }

  // Retorna o JSX do componente "App".
  // Envolve os filhos com o provedor "PreferencesContext.Provider",
  // fornecendo o estado "preferences" e as funções "toggleTheme" e "changeLanguage".
  return (
    <>
      <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage }}>
          <div>
            {/*Renderiza a barra de ferramentas "Toolbar". */}
            <Toolbar />

            {/*Botões para alternar o tema e o idioma. */}
            <button onClick={toggleTheme}>Trocar o tema</button>
            <button onClick={() => changeLanguage('pt-br')}>PT-BR</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
      </PreferencesContext.Provider>
    </>
  )
}

// Define o componente "Toolbar" que usa o contexto "PreferencesContext" para exibir as preferências.
function Toolbar() {
  // Acessa as preferências do contexto usando "useContext".
  const { preferences } = useContext(PreferencesContext)

  // Retorna o JSX da barra de ferramentas.
  // Define o estilo da barra de ferramentas de acordo com o tema atual.
  return (
    <div style={{background: preferences.theme === 'dark' ? 'grey' : 'blue', color: preferences.theme === 'dark' ? 'white' : 'white'}}>
      Tema utilizado - {preferences.theme}, Idioma: {preferences.language}
    </div>
  )
}

// Exporta o componente "App" como padrão.
export default App