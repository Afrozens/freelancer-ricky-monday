import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'

export const ContainerHistory = styled.div`
  position: absolute;
  width: 326px;
  height: 77px;
  left: 32px;
  top: 258px;

  background-color: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  border-radius: 12px;
`

export const CardTitleHistory = styled.h5`
  width: 77px;
  height: 29px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  display: flex;
  letter-spacing: -0.045em;

  color: ${({ theme }: ThemeObject) => theme?.textColor};
`
