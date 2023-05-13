import styled from '@emotion/styled'
import { Theme } from '../../interfaces/theme'

export const Homepage = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({theme}: Theme) => theme?.background};
`
