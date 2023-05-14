import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces'
import { NavLink } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import { RxExit } from 'react-icons/rx'
import { HiClock } from 'react-icons/hi'

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

export const Link = styled(NavLink)`
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 15px;
  background-color: transparent;

  &.active {
    background-color: ${({ theme }: ThemeObject) => theme?.background};
  }

  &.active svg {
    color: ${({ theme }: ThemeObject) => theme?.colorIconHome};
  }
`

export const HomeIcon = styled(RiHomeFill)`
  width: 24px;
  height: 24px;
  color: #777777;

  &.active {
    color: ${({ theme }: ThemeObject) => theme?.colorIconHome};
  }
`
export const HistoryIcon = styled(HiClock)`
  width: 24px;
  height: 24px;
  color: #777777;

  &.active {
    color: ${({ theme }: ThemeObject) => theme?.colorIconHome};
  }
`

export const ExitIcon = styled(RxExit)`
  width: 24px;
  height: 24px;
  color: #777777;

  &.active {
    color: ${({ theme }: ThemeObject) => theme?.colorIconHome};
  }
`
