import { Outlet } from 'react-router-dom'
import { Link, Header, NavBar, HomeIcon, ExitIcon, HistoryIcon } from './styles'

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <NavBar>
          <Link to={'/'}>
            <HomeIcon />
          </Link>
          <Link to={'/history'}>
            <HistoryIcon />
          </Link>
          <Link to={'/login'}>
            <ExitIcon />
          </Link>
        </NavBar>
      </Header>
      <Outlet />
    </>
  )
}

export default HeaderComponent
