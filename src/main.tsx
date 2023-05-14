import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ThemesProvider } from './contexts/ThemesContext'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemesProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemesProvider>
  </React.StrictMode>,
)
