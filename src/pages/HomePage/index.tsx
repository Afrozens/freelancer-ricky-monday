import { useState } from 'react'
import { ButtonTheme, PreviewImg } from '../../components'
import { useData } from '../../contexts/ApiDataContext'
import { saveInLocalStorage } from '../../utils'
import { Buttoncross, Buttonlike, CrossIcon, Homepage } from './styles'
import { DbData } from '../../interfaces'
import { useAuth } from '../../contexts/AuthContext'

const HomePage = () => {
  const [dbData, setDbData] = useState<DbData | null>(null)

  const { user } = useAuth()
  const { dataApi, figure, setFigure } = useData()
  const { image, name } = dataApi

  const handleInteractivity = (isLike: boolean) => {
    const adittion = figure + 1
    setFigure(adittion)
    saveInLocalStorage('figure', adittion)

    const data: DbData = {
      name: name,
      image: image,
      isLike: isLike,
      uid: user?.uid as string,
    }
    setDbData(data)

    console.log(dbData)
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
