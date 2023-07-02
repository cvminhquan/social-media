import { createContext, useEffect, useState, ReactNode } from 'react'

interface DarkModeContextType {
  darkMode: boolean
  toggle: () => void
}

export const DarkModeContext = createContext<DarkModeContextType>({} as DarkModeContextType)

interface DarkModeContextProviderProps {
  children: ReactNode
}

export const DarkModeContextProvider = ({ children }: DarkModeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(JSON.parse(localStorage.getItem('darkMode') ?? 'false'))

  const toggle = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return <DarkModeContext.Provider value={{ darkMode, toggle }}>{children}</DarkModeContext.Provider>
}
