import { Serie } from '../../interfaces'
import { PreviewContainer, PreviewShadow, PreviewTitle, Previewimg } from './styles'

type PropsPreview = Pick<Serie, 'image' | 'name'>

const PreviewImg = ({ name, image }: PropsPreview) => {
  return (
    <PreviewContainer>
      <Previewimg src={image} alt={`preview image ${name}`} />
      <PreviewTitle>{name}</PreviewTitle>
      <PreviewShadow />
    </PreviewContainer>
  )
}

export default PreviewImg
