import { Outlet } from 'react-router-dom'
import { NavLink, Header, NavBar } from './styles'

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <NavBar>
          <NavLink to={'/'}>
            <img src='/icons/home.svg' alt='home' />
          </NavLink>
          <NavLink to={'/history'}>
            <img src='/icons/history.svg' alt='home' />
          </NavLink>
          <NavLink to={'/login'}>
            <img src='/icons/leave.svg' alt='home' />
          </NavLink>
        </NavBar>
      </Header>
      <Outlet />
    </>
  )
}

export default HeaderComponent
