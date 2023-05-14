import { DbData } from '../../interfaces'
import { CardCrossIcon, CardHeartIcon, CardPreviewCard, CardTitleHistory, ContainerHistory } from './style'

type PropsCard = Pick<DbData, 'image' | 'isLike' | 'name'>

const CardHistory = ({ image, isLike, name }: PropsCard) => {
  return (
    <ContainerHistory>
      <CardPreviewCard src={image} alt={name} />
      <CardTitleHistory>{name}</CardTitleHistory>
      {isLike ? <CardHeartIcon /> : <CardCrossIcon />}
    </ContainerHistory>
  )
}

export default CardHistory
