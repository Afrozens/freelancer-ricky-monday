import { ApiUser, User } from '../interfaces'

export const ApiAdapter = (user: ApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    image: user.image
  }
}
