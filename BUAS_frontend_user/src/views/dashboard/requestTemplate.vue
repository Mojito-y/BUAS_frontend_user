<template>
  <div class="app-container">
    哎哟 不错哦
  </div>
</template>
<script>
//引入接口定义的js文件 basicAttributeAnalysis.js
import basicAttributeAnalysis from  '@/api/basicAttributeAnalysis.js'

export default {

 data(){    //定义变量和初始值
  return{
    para1:1,  //当前页
    para2:3,    //每页显示的记录数
    pageObj:{},    //条件封装对象
    list:[],   //每页数据集合
    total:0   //总记录数
  }
 },

 created () {   //在页面渲染之前执行
  //一般调用methods定义的方法，得到数据
      this.getGender()

 },
 methods:{//定义方法,进行请求接口调用
      //用户性别聚合分析
      getGender(){
        basicAttributeAnalysis.getGenderAggregation(this.para1,this.para2,this.pageObj)
          .then(response => {   //表示请求成功之后调用 response是接口返回的数据
            //返回集合赋值给list
            this.list = response.data.pageObj
            //总记录数
            this.total = response.data.total
          })
          .catch(error => {     //请求失败时调用
            console.log(error)
          })
      }
 }
}
</script>
<style scoped>

</style>




