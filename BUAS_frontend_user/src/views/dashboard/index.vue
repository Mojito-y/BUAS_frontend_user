<template>
  <div class="dashboard-container">
    <div class="main">
    </div>
    <p style="line-height: 5px; text-align: center;color:  #fff;">Copyright © 2022 Bank Inc. 保留所有权利。</p>
      <!-- <p style="line-height: 5px; text-align: center;color:  #6E6E73;">京ICP备10214630 营业执照 无线电发射设备销售备案编号11201910351200</p> -->
    <p style="line-height: 5px; text-align: center;color:  #6E6E73;">.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    //margin: 30px;
    width: 100%;
    height: 750px;
    background-image: url("../../assets/loginWelcome.png");
    background-size: 100% 100%;
  }
/*   &-bottomText {
    width: 100%;
    height: 100%;
    color:  #6E6E73;
    font-size: 10px;
    line-height: 46px;
    margin-top: 650px;
    text-align: center;
  } */
}
.main {
  width:100%;
  height:650px;
  //margin-left: -30px;

  //background-size: cover;
  //background-position: center;

}
</style>
