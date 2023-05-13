import { Buttontheme } from './style'
import { ReactNode } from 'react'

type PropsButton = {
  children: ReactNode
}

const ButtonTheme = ({ children }: PropsButton) => {
  return <Buttontheme>{children}</Buttontheme>
}

export default ButtonTheme
