import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'

export const Homepage = styled.main`
  display: flex;
  padding: 22px;
  flex-direccion: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({theme}: ThemeObject) => theme?.background};
`

export const Buttoncross = styled.button`
  position: absolute;
  padding: 20px;
  left: 30.26%;
  right: 56.67%;
  top: 74.17%;
  bottom: 19.79%;
  border: 0;
  border-radius: 100%;
  background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
`

export const Buttonlike = styled.button`
  position: absolute;
  padding: 20px;
  left: 48.97%;
  right: 30.26%;
  top: 72.39%;
  bottom: 18.01%;
  border: 0;
  border-radius: 100%;
  
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
`

