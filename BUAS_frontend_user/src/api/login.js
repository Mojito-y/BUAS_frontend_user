import request from '@/utils/request'

export function login(username, password,captchaCode) {
  return request({
    url: 'userinfo/login',   /* 登录接口地址 */
    method: 'post',
    data: {
      username,
      password,
      captchaCode
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
