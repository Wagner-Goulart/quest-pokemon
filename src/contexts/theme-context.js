import { createContext, useState } from "react"

export const themes = {
    light: {
        primary: '#4b538b',
        secundary:'#6D78C9',
        color:"#000",
        background: '#8896FC'
    },

    dark: {
        primary: '#212121',
        secundary:'#424242',
        color:'#fff',
        background: '#000000'
    }  
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}