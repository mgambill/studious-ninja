import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext({
  darkTheme: false,
  toggleTheme: () => { }
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={({ darkTheme, toggleTheme })}>{children}</ThemeContext.Provider>
  )
}