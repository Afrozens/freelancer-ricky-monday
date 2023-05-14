import { Outlet, useNavigate } from 'react-router-dom'
import { Link, Header, NavBar, HomeIcon, ExitIcon, HistoryIcon } from './styles'
import { useAuth } from '../../contexts/AuthContext'
import { auth } from '../../services/firebase'
import { useEffect } from 'react'

const HeaderComponent = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [navigate, user])

  return (
    <>
      {!user ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Header>
            <NavBar>
              <Link to={'/'}>
                <HomeIcon />
              </Link>
              <Link to={'/history'}>
                <HistoryIcon />
              </Link>
              <Link to={'/login'} onClick={() => logout(auth)}>
                <ExitIcon />
              </Link>
            </NavBar>
          </Header>
          <Outlet />
        </>
      )}
    </>
  )
}

export default HeaderComponent
