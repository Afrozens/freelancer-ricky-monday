import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ThemesProvider } from './contexts/ThemesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemesProvider>
      <RouterProvider router={router} />
    </ThemesProvider>
  </React.StrictMode>,
)
