import { PreviewContainer, PreviewShadow, PreviewTitle, Previewimg } from './styles'

const PreviewImg = () => {
  return (
    <PreviewContainer>
      <Previewimg src='/preview.jpg' alt='preview image car' />
      <PreviewTitle>Formula 1</PreviewTitle>
      <PreviewShadow />
    </PreviewContainer>
  )
}

export default PreviewImg
