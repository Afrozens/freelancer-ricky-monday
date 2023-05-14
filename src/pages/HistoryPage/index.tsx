import { CardHistory } from '../../components'
import { Historypage, IconLeft, SubtitleHistory, TitleHistory } from './styles'
import { Link } from 'react-router-dom'

const HistoryPage = () => {
  return (
    <Historypage>
      <Link to='/'>
      <IconLeft />
      </Link>
      <TitleHistory>History</TitleHistory>
      <SubtitleHistory>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </SubtitleHistory>
      <CardHistory />
    </Historypage>
  )
}

export default HistoryPage
