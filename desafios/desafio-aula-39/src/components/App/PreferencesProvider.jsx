import { useState } from 'react'
import PreferencesContext from './PreferencesContext'

const PreferencesProvider = ({children}) => {
    const [ preferences, setPreferences ] = useState({theme: 'light', language: 'en'})
    
    const toggleTheme = () => {
        setPreferences(currentTheme => ({
            theme: currentTheme.theme === 'light' ? 'dark' : 'light'
        }))
    }

    const changeLanguage = (language) => {
        setPreferences(currentLanguage => ({
            ...currentLanguage,
            language: language
        }))
    }

    return (
        <PreferencesContext.Provider value={{preferences, toggleTheme, changeLanguage}}>
            {children}
        </PreferencesContext.Provider>
    )
}

export default PreferencesProvider