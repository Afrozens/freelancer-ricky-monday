import styled from '@emotion/styled'
import { Theme } from '../../interfaces/theme'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 347px;
  height: 85px;
  border-radius: 24px;
  position: absolute;
  left: 23px;
  top: 739px;
  background: ${({theme}: Theme) => theme?.backgroundInputs};
`
