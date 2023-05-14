import { useState, createContext } from 'react'
import { ThemeContext } from '../interfaces/theme'
import { ThemeProvider, Global, css } from '@emotion/react'
import { darkTheme, lightTheme } from '../theme/theme'
import { PropsProvider, initialState } from '../interfaces/context'

const ThemesContext = createContext<ThemeContext>(initialState)

export const ThemesProvider = ({ children }: PropsProvider) => {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const globalBackground = isToggle ? lightTheme.background : darkTheme.background

  const data = { isToggle, handleToggle }
  return (
    <ThemesContext.Provider value={data}>
      <ThemeProvider theme={isToggle ? lightTheme : darkTheme}>
        <Global
          styles={css`
            body {
              background: ${globalBackground};
            }
          `}
        />
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  )
}

export default ThemesContext
