import ThemesContext from '../../contexts/ThemesContext'
import { ThemeContext } from '../../interfaces'
import { Buttontheme } from './styles'
import { useContext } from 'react'

const ButtonTheme = () => {
  const { isToggle, handleToggle } = useContext<ThemeContext>(ThemesContext)
  return <Buttontheme onClick={handleToggle}>{isToggle ? '🌙'  : '🌤️'}</Buttontheme>
}

export default ButtonTheme
