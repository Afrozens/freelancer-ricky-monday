
import { useState, ReactNode, createContext } from 'react'
import { ThemeContext } from '../interfaces/theme';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '../theme/theme';

type PropsProvider = {
  children: ReactNode
}

const initialState = {};
const ThemesContext = createContext<ThemeContext>(initialState)

export const ThemesProvider = ({ children }: PropsProvider) => {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const data = { isToggle, handleToggle }
  return (
    <ThemesContext.Provider value={data}>
      <ThemeProvider theme={isToggle ? lightTheme : darkTheme}>
      {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  )
}

export default ThemesContext
