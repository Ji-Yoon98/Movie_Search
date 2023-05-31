import { Store } from '../core/heropy'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://parkji-yun.github.io/assets/images/avthm.jpg',
  name: 'Park_JiYun',
  email: 'nmjk0123@gmail.com',
  blog: 'https://parkji-yun.github.io/',
  github: 'https://github.com/parkJi-yun',
  repository: 'https://github.com/parkJi-yun/Movie_Search'
})
