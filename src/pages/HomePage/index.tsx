import { useEffect } from 'react'
import { ButtonTheme, PreviewImg } from '../../components'
import { getApi } from '../../services'
import { Buttoncross, Buttonlike, CrossIcon, Homepage } from './styles'

const HomePage = () => {
  useEffect(() => {
    getApi(2)
  }, [])

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
