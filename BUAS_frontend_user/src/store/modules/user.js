import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      /* //先写死登录数据实现登录功能
      const data = {'token':'admin'}
      setToken(data.token)  //取数据得登录token
      commit('SET_TOKEN', data.token) //提交 */
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password,userInfo.captchaCode).then(response => {
          const data = response.data
          setToken(data.jwt)    //调用/utils/auth.js的setToken函数 全局设置token 作为用户唯一的标识
          commit('SET_TOKEN', data.jwt)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息[需要带着用户的token向后台要用户信息]
    GetInfo({ commit, state }) {
      const data = {'name':'mojito','avatar':'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'}
      commit('SET_NAME', data.name)
      commit('SET_AVATAR', data.avatar) //avatar头像
      /* return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          const userAvater = {'avatar':'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'}
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', userAvater.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      }) */
    },

    // 登出
    LogOut({ commit, state }) {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      /* return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      }) */
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
