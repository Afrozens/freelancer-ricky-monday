import { useState } from 'react'
import { ButtonTheme, PreviewImg } from '../../components'
import { useData } from '../../contexts/ApiDataContext'
import { saveInLocalStorage } from '../../utils'
import { Buttoncross, Buttonlike, CrossIcon, Homepage } from './styles'

const HomePage = () => {
  const [dbData, setDbData] = useState({})
  const { dataApi, figure, setFigure } = useData()
  const { image, name } = dataApi

  const handleLike = () => {
    const adittion = figure + 1
    setFigure(adittion)
    saveInLocalStorage('figure', adittion)
  }
  return (
    <Homepage>
      <ButtonTheme />
      <PreviewImg image={image} name={name} />
      <Buttoncross>
        <CrossIcon />
      </Buttoncross>
      <Buttonlike onClick={handleLike}>
        <img src='/icons/like.svg' alt='like' />
      </Buttonlike>
    </Homepage>
  )
}

export default HomePage
