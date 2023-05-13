export interface ThemeContext {
  isToggle?: boolean,
  handleToggle?: () => void
}

export interface Theme {
  theme?: {
    background: string
  backgroundInputs: string
  textColor: string
  textColorSecundary: string
  colorHearth: string
  }
}
