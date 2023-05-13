import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'

export const Loginpage = styled.section`
  display: flex;
  padding: 22px;
  flex-direccion: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }: ThemeObject) => theme?.background};
`

export const InputEmail = styled.input`
  box-sizing: border-box;
  padding-left: 10px;
  outline: none;
  position: absolute;
  width: 330px;
  height: 67px;
  left: 30px;
  top: 337px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  :placeholder {
    color: ${({ theme }: ThemeObject) => theme?.textColor};
    background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  }
`

export const InputPass = styled.input`
  box-sizing: border-box;
  padding-left: 10px;
  outline: none;
  position: absolute;
  width: 330px;
  height: 67px;
  left: 30px;
  top: 414px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  :placeholder {
    color: ${({ theme }: ThemeObject) => theme?.textColor};
    background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  }
`

export const TitleLogin = styled.h1`
  position: absolute;
  width: 192px;
  height: 51px;
  left: 99px;
  top: 202px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  display: flex;
  align-items: center;
  text-align: center;
`

export const SubTitleLogin = styled.h3`
  position: absolute;
  width: 322px;
  height: 54px;
  left: 34px;
  top: 260px;
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme }: ThemeObject) => theme?.textColorSecundary};

  opacity: 0.8;
`
