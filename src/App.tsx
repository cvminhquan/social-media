import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import './App.scss'
import Profile from './pages/Profile/Profile'
import NavBar from './components/NavBar/NavBar'
import LeftBar from './components/LeftBar/LeftBar'
import RightBar from './components/RightBar/RightBar'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/authContext'
// Import các components khác

const App = () => {
  const {currentUser} = useContext(AuthContext);
  const themeClass = 'dark'
  const { darkMode } = useContext(DarkModeContext)
  console.log('darkMode', darkMode)
  const Layout = () => {
    return (
      <div className={darkMode ? 'dark' : 'light'}>
        <NavBar />
        <div style={{ display: 'flex', backgroundColor: 'var(--color-bg-soft)' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
