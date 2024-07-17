import { createContext } from "react"

const PreferencesContext = createContext({
    theme: 'light',
    language: 'en'
})

export default PreferencesContext