import { reaction, action as Action, observable as Observable } from 'mobx'

class CommonStore {
  @Observable appName = 'Notes'
  @Observable token = window.localStorage.getItem('jwt')
  @Observable appLoad = false

  constructor() {
    reaction(
      () => this.token,
      (token: string) => {
        if (token) {
          window.localStorage.setItem('jwt', token)
        } else {
          window.localStorage.removeItem('jwt')
        }
      }
    )
  }

  @Action setToken(token: string) {
    this.token = token
  }
  @Action setAppLoad() {
    this.appLoad = true
  }
}

export default new CommonStore()
