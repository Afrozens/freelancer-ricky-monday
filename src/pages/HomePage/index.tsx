import { ButtonTheme, PreviewImg } from '../../components'
import { Buttoncross, Buttonlike, Homepage } from './styles'

const HomePage = () => {
  return (
    <Homepage>
      <ButtonTheme />
      <PreviewImg />
      <Buttoncross>
        <img src='/icons/cross.svg' alt='cross' />
      </Buttoncross>
      <Buttonlike>
      <img src='/icons/like.svg' alt='like' />
    </Buttonlike>
    </Homepage>
  )
}

export default HomePage
