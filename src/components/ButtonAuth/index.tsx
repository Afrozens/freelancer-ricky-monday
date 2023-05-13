import { Buttonauth } from './styles'
import { ReactNode } from 'react'

type PropsAuth = {
  children: ReactNode
}

const ButtonAuth = ({ children }: PropsAuth) => {
  return <Buttonauth>{children}</Buttonauth>
}

export default ButtonAuth
