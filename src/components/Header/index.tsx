import { Outlet } from 'react-router-dom'
import { Header } from './styles'

const HeaderComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default HeaderComponent
