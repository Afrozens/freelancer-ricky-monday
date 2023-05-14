import axios from 'axios'
import { ApiAdapter } from '../adapter'

export const getApi = async (id: number) => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.data
  const userData = ApiAdapter(data)
  return userData
}
