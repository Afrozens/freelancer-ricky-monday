import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 13px;
  width: 347px;
  height: 85px;
  border-radius: 24px;
  position: absolute;
  top: 84%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 99;
  background-color: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
`

export const NavBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const NavLink = styled(Link)`
  width: 59px;
  height: 59px;
  border: 0;
  border-radius: 16px;
  padding: 20px;
  fill: ${({ theme }: ThemeObject) => theme?.textColor};
  background-color: transparent;

  :focus {
    background-color: ${({ theme }: ThemeObject) => theme?.background};
  }
`
