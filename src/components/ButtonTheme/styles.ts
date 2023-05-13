import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'

export const Buttontheme = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 63px;
  left: 21px;
  top: 22px;
  border: 0;
  z-index: 3;
  font-size: 24px;
  background-color: ${({theme}: ThemeObject) => theme?.background};
  border-radius: 18px;
`
