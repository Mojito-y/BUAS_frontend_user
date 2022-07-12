<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="form" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">欢迎注册银行用户系统</h3>
      <el-form-item prop="id">
        <el-input v-model="bankUser.id" name="id" type="text" auto-complete="on" placeholder="主银行卡号" />
      </el-form-item>
      <el-form-item prop="username">
        <el-input v-model="bankUser.username" name="username" type="text" auto-complete="on" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="bankUser.password" name="password" type="text" auto-complete="on" placeholder="密码" />
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="bankUser.name" name="username" type="text" auto-complete="on" placeholder="姓名" />
      </el-form-item>
      <el-form-item prop="sex" style="border:0">
        <el-radio-group v-model="bankUser.sex" fill="#4EBD8D">
          <el-radio-button label="男"></el-radio-button>
          <el-radio-button label="女"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="age">
        <el-input placeholder="请输入用户年龄" v-model="bankUser.age"></el-input>
      </el-form-item>
      <el-form-item prop="creditCards">
        <el-input placeholder="请输入用户持卡数量" v-model="bankUser.creditCards"></el-input>
      </el-form-item>
      <el-form-item prop="area">
        <el-select clearable v-model="bankUser.area" placeholder="请选择办卡所在省份">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="border:0">
        <el-button :loading="loading"  type="primary" style="width:100%" @click="onSubmitAdd">
          立即注册
        </el-button>
      </el-form-item>
      <el-form-item>
         <router-link class="inlineBlock" to="/">
          <el-button type="primary" style="width:100%" @click="cancelAdd">已有帐号？点此登录</el-button>
        </router-link>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import register from '@/api/register'

export default {
  data () {
    return {
      bankUser:{},    //条件封装对象
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
    }
  },
   mounted(){
      onSubmitAdd()
    },
     methods: {
      //注册方法
      onSubmitAdd() {
        register.registerUser(this.bankUser)
        .then(response =>{
          //提示信息
          this.$message({
              type: 'success',
              message: '注册成功!'
            })
          //跳转登录，使用路由跳转方式实现
          this.$router.push({ path: '../login/index'})
        })
      },
      cancelAdd(){
        this.$router.push({ path: '../login/index'})
      }
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  background-image: url("../../assets/login1.png");
  background-size: cover;
  background-position: center;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
