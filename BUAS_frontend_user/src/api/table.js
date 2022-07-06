import request from '@/utils/request' //utils是框架写好的

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
