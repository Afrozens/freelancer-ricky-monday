import { ButtonTheme, PreviewImg } from '../../components'
import { Buttoncross, Buttonlike, CrossIcon, Homepage } from './styles'

const HomePage = () => {
  return (
    <Homepage>
      <ButtonTheme />
      <PreviewImg />
      <Buttoncross>
        <CrossIcon />
      </Buttoncross>
      <Buttonlike>
      <img src='/icons/like.svg' alt='like' />
    </Buttonlike>
    </Homepage>
  )
}

export default HomePage
