import { useContext } from 'react'
import PreferencesContext from './PreferencesContext'

function Toolbar() {
    const { preferences } = useContext(PreferencesContext)

    return (
        <div style={{background: preferences.theme === 'dark' ? 'grey' : 'blue', color: preferences.theme === 'dark' ? 'white' : 'white' }}>
            Tema utilizado - {preferences.theme}, Idioma: {preferences.language}
        </div>
    )
}

export default Toolbar