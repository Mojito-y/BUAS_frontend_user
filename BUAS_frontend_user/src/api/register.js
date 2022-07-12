/* 注册api接口 */
import request from '@/utils/request' //utils是框架写好的 引入封装的axios

//方式
export default{
  //添加用户消费记录
  registerUser(bankUser){
    return request({
      url: `userinfo/register`,
      method: 'post',
      data:bankUser
    })
  }
}








