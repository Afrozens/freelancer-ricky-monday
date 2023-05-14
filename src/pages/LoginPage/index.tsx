import { ButtonAuth } from '../../components'
import { Loginpage, InputEmail, InputPass, TitleLogin, SubTitleLogin, ContainerInputs } from './styles'

const LoginPage = () => {
  return (
    <Loginpage>
      <TitleLogin>Welcome</TitleLogin>
      <SubTitleLogin>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </SubTitleLogin>
      <ContainerInputs >
      <InputEmail type='email' placeholder='correo@gmail.com' />
      <InputPass type='password' placeholder='your password' />
      </ContainerInputs>
      <ButtonAuth>Login</ButtonAuth>
    </Loginpage>
  )
}

export default LoginPage
