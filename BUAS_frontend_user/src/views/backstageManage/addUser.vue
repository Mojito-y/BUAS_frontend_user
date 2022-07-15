<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="消费省份">
        <el-select clearable v-model="bankUser.consumptionArea" placeholder="请选择消费省份">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="消费金额">
        <el-input placeholder="请输入消费金额" clearable v-model="bankUser.consumptionAmount"></el-input>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-select clearable v-model="bankUser.payMethod" placeholder="请选择支付方式">
          <el-option
            v-for="item in option2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品类别">
        <el-select clearable v-model="bankUser.commodityCategory" placeholder="请选择支付方式">
          <el-option
            v-for="item in option4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="支付时间">
        <el-select clearable v-model="bankUser.payTime" placeholder="请选择支付时间">
          <el-option
            v-for="item in option3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addOrUpdate">保存</el-button>
        <el-button type="primary" @click="cancelAdd">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//引入接口定义的js文件
import backstageManage from '@/api/backstageManage'
  export default {
    data() {
        return {
          bankUser:{},
          token:window.localStorage.token,
          options1: [
            {
              value: "北京",
              label: "北京",
            },
            {
              value: "天津",
              label: "天津",
            },
            {
              value: "上海",
              label: "上海",
            },
            {
              value: "重庆",
              label: "重庆",
            },
            {
              value: "河北",
              label: "河北",
            },
            {
              value: "河南",
              label: "河南",
            },
            {
              value: "云南",
              label: "云南",
            },
            {
              value: "辽宁",
              label: "辽宁",
            },
            {
              value: "黑龙江",
              label: "黑龙江",
            },
            {
              value: "湖南",
              label: "湖南",
            },
            {
              value: "安徽",
              label: "安徽",
            },
            {
              value: "山东",
              label: "山东",
            },
            {
              value: "新疆",
              label: "新疆",
            },
            {
              value: "江苏",
              label: "江苏",
            },
            {
              value: "浙江",
              label: "浙江",
            },
            {
              value: "江西",
              label: "江西",
            },
            {
              value: "湖北",
              label: "湖北",
            },
            {
              value: "广西",
              label: "广西",
            },
            {
              value: "甘肃",
              label: "甘肃",
            },
            {
              value: "山西",
              label: "山西",
            },
            {
              value: "内蒙古",
              label: "内蒙古",
            },
            {
              value: "陕西",
              label: "陕西",
            },
            {
              value: "吉林",
              label: "吉林",
            },
            {
              value: "福建",
              label: "福建",
            },
            {
              value: "广东",
              label: "广东",
            },
            {
              value: "青海",
              label: "青海",
            },
            {
              value: "西藏",
              label: "西藏",
            },
            {
              value: "四川",
              label: "四川",
            },
            {
              value: "宁夏",
              label: "宁夏",
            },
            {
              value: "海南",
              label: "海南",
            },
            {
              value: "台湾",
              label: "台湾",
            },
            {
              value: "香港",
              label: "香港",
            },
            {
              value: "澳门",
              label: "澳门",
            },
            {
              value: "贵州",
              label: "贵州",
            }
          ],
          option2:[{
            value: '电子支票',
            label: '电子支票'
          }, {
            value: '网上银行',
            label: '网上银行'
          }, {
            value: '银行卡支付',
            label: '银行卡支付'
          }, {
            value: '第三方平台(支付宝、微信)',
            label: '第三方平台(支付宝、微信)'
          }],
          option3:[{
            value: '2016',
            label: '2016'
          }, {
            value: '2017',
            label: '2017'
          }, {
            value: '2018',
            label: '2018'
          }, {
            value: '2019',
            label: '2019'
          },{
            value: '2020',
            label: '2020'
          },{
            value: '2021',
            label: '2021'
          },{
            value: '2022',
            label: '2022'
          }
          ],
          option4:[{
            value: '食品、保健品',
            label: '食品、保健品'
          }, {
            value: '服装鞋帽',
            label: '服装鞋帽'
          }, {
            value: '日用百货',
            label: '日用百货'
          }, {
            value: '文体用品',
            label: '文体用品'
          },
          {
            value: '数码产品及其配件',
            label: '数码产品及其配件'
          },
          {
            value: '手提包、箱包',
            label: '手提包、箱包'
          },
          {
            value: '家用电器',
            label: '家用电器'
          },
          {
            value: '化妆品和美容产品',
            label: '化妆品和美容产品'
          },
          {
            value: '书籍音像制品',
            label: '书籍音像制品'
          },
          ]
        }
      },
    created(){
      //获取路由id值
      //调用接口得到用户消费记录
      if (this.$route.params && this.$route.params.id) {
        const id = this.$route.params.id
        this.getuserById(id)
        // alert(id)
      }
    },
    mounted(){
      onSubmitAdd()
      update()
    },
    methods: {
      //根据id查询
      getuserById(id){
        backstageManage.getUserById(id)
        .then(response =>{
          this.bankUser = response.data
        })
      },
      //提交添加方法
      onSubmitAdd() {
        backstageManage.addUserConsume(this.bankUser,this.token)
        .then(response =>{
          //提示信息
          this.$message({
              type: 'success',
              message: '添加成功!'
            })
          //跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '../backstageManage/backstageManage'})
        })
      },
      //修改
      update() {
        backstageManage.updateUser(this.bankUser)
        .then(response =>{
          //提示信息
          this.$message({
              type: 'success',
              message: '修改成功!'
            })
          //跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '../backstageManage'})
        })
      },
      addOrUpdate(){
        // 判断添加还是修改(利用页面对象有无id值)
        if(!this.bankUser.id){    //没有id 添加
          this.onSubmitAdd();
        }else{    //有id值 修改
          this.update();
        }
      },
      cancelAdd(){
        this.$router.push({ path: '../backstageManage'})
      }
    },

  }
</script>
<style scoped>
 .el-button--primary:hover{
  background-color: #4DBF8C;
 }
 .el-button--primary:focus{
  background-color: #304156;
 }
 .el-button{
  background-color: #304156;
  border: 0;
 }
</style>




