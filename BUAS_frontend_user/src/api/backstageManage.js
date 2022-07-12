import request from '@/utils/request' //utils是框架写好的 引入封装的axios

//方式
export default{
  //用户信息列表渲染接口
  getUserList(page,pageSize,searchObj){    //括号内为请求参数+页面对象（自取名）
    return request({
      //此处写后端接口路径
      // `@RequestMapping注解里面的路径+@PostMapping注解里面的路径(路径中参数用$拼接)`
      //``反引号表示模板字符串
      //示例：post方法：`接口url/${para1}/${para2}`   get方法：`接口url/?para1=${para1}&para2=${para2}`
      url: `userinfo/${page}/${pageSize}`,
      method: 'post',
      // withCredentials:true,      //提交方式
      data:searchObj        //使用json传递
    })
  },
  //添加用户消费记录
  addUserConsume(bankUser){
    return request({
      url: `user/add`,
      method: 'post',
      data:bankUser
    })
  },

  //按id删除用户消费记录
  deleteUser(id){    //括号内为请求参数+页面对象（自取名） user/name
    return request({
      url: `user/del/${id}`,
      method: 'post',      //提交方式
    })
  },
  //按id查询单条用户消费记录
  getUserById(id){
    return request({
      url: `user/get/${id}`,
      method: 'get'
    })
  },
  //修改用户消费记录
  updateUser(bankUser){
    return request({
      url: `user/update`,
      method: 'post',
      data:bankUser
    })
  }

}







