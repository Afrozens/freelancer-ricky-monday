import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'
import { HiOutlineArrowLeft } from 'react-icons/hi'

export const Historypage = styled.main`
  display: flex;
  padding: 22px;
  flex-direccion: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }: ThemeObject) => theme?.background};
`

export const IconLeft = styled(HiOutlineArrowLeft)`
  with: 30px;
  height: 30px;
  position: absolute;
  left: 32px;
  top: 54px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
`

export const TitleHistory = styled.h2`
  position: absolute;
  width: 133px;
  height: 51px;
  left: 32px;
  top: 102px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  display: flex;
  align-items: center;
  letter-spacing: -0.055em;
`

export const SubtitleHistory = styled.h4`
  position: absolute;
  width: 325px;
  height: 54px;
  left: 32px;
  top: 161px;
  color: ${({ theme }: ThemeObject) => theme?.textColorSecundary};
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  display: flex;
  align-items: center;

  color: ${({ theme }: ThemeObject) => theme?.textColor};

  opacity: 0.8;
`
