import styled from '@emotion/styled'
import { Theme } from '../../interfaces/theme'

export const Buttontheme = styled.button`
  position: absolute;
  width: 62px;
  height: 63px;
  left: 21px;
  top: 22px;
  border: 0;
  background: ${({theme}: Theme) => theme?.background};
  border-radius: 18px;
`
