import { createContext, useEffect, useState, ReactNode } from 'react'

interface User {
  id: number
  name: string
  profilePic: string
}

interface AuthContextType {
  currentUser: User | null
  login: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') ?? 'null'))

  const login = () => {
    setCurrentUser({
      id: 1,
      name: 'Chau Vu Minh Quan',
      profilePic: 'https://avatars.githubusercontent.com/u/105114297?v=4'
    })
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
}
