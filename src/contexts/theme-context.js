import { createContext, useEffect, useState } from "react"


export const themes = {
    light: {
        name: 'light',
        primary: '#4b538b',
        secundary: '#6D78C9',
        color: "#000",
        background: '#8896FC',

    },

    dark: {
        name: 'dark',
        primary: '#212121',
        secundary: '#424242',
        color: '#fff',
        background: '#000000',

    }
}

const saveThemePreference = (theme) => {
   localStorage.setItem("theme", JSON.stringify(theme))
  
}

const getThemePreference = () => {
    
    const storageTheme = JSON.parse(localStorage.getItem("theme"))
    return storageTheme ? storageTheme : themes.light

}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    
    const [theme, setTheme] = useState(getThemePreference())

    useEffect(() => {
        saveThemePreference(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}