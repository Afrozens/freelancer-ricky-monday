import { ButtonTheme, PreviewImg } from '../../components'
import { useData } from '../../contexts/ApiDataContext'
import { saveInLocalStorage } from '../../utils'
import { Buttoncross, Buttonlike, CrossIcon, Homepage } from './styles'
import { DbData } from '../../interfaces'
import { useAuth } from '../../contexts/AuthContext'
import { sendData } from '../../services'

const HomePage = () => {

  const { user } = useAuth()
  const { dataApi, figure, setFigure } = useData()
  const { image, name } = dataApi

  const handleInteractivity = async (isLike: boolean) => {
    const adittion = figure + 1
    setFigure(adittion)
    saveInLocalStorage('figure', adittion)

    const data: DbData = {
      name: name,
      image: image,
      isLike: isLike,
      uid: user?.uid as string,
    }

    if (data) {
      await sendData(data)
    }
  }

  return (
    <Homepage>
      <ButtonTheme />
      <PreviewImg image={image} name={name} />
      <Buttoncross onClick={() => handleInteractivity(false)}>
        <CrossIcon />
      </Buttoncross>
      <Buttonlike onClick={() => handleInteractivity(true)}>
        <img src='/icons/like.svg' alt='like' />
      </Buttonlike>
    </Homepage>
  )
}

export default HomePage
