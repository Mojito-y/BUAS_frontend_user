<template>
<div class="app-container">
  <!-- 表单查询输入框 -->

  <el-form :inline="true" class="demo-form-inline">   <!-- inline表示一行显示  -->
    <!-- <el-form-item>可添加label标签 -->
      <!-- <el-input v-model="searchObj.hosnam" placeholder="姓名" v-model用来调用页面对象的相关值/> -->
      <!-- <el-input placeholder="消费金额" /> -->
    <!-- </el-form-item> -->
    <el-form-item>
      <el-select v-model="valueprovince" clearable filterable placeholder="消费省份">
          <el-option
            v-for="item in provincesoptions"
            :key="item.valueprovince"
            :label="item.label"
            :value="item.valueprovince">
          </el-option>
        </el-select>
    </el-form-item>
    <el-form-item>
        <el-select v-model="valuemethod" clearable filterable placeholder="支付方式">
          <el-option
            v-for="item in methodsoptions"
            :key="item.valuemethod"
            :label="item.label"
            :value="item.valuemethod">
          </el-option>
        </el-select>
    </el-form-item>
    <el-form-item>
        <div class="block">
          <el-date-picker
            v-model="valuetime"
            data="timeData"
            type="year"
            placeholder="支付时间">
          </el-date-picker>
        </div>
    </el-form-item>
    <el-form-item>
        <el-select v-model="valuecategory" clearable filterable placeholder="商品类别">
          <el-option
            v-for="item in categoriesoptions"
            :key="item.valuecategory"
            :label="item.label"
            :value="item.valuecategory">
          </el-option>
        </el-select>
    </el-form-item>
    <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button><!-- @click绑定调用方法 -->
    <el-button type="primary" icon="el-icon-plus" @click="getList()">添加</el-button><!-- @click绑定调用方法 -->
  </el-form>


  <!--用户管理表格 -->
  <div class="tableDiv">
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column fixed prop="id" label="用户id" width="170">
    </el-table-column>
    <el-table-column prop="consumption_area" label="消费省份" width="150">
    </el-table-column>
    <el-table-column prop="consumption_amount" label="消费金额" width="170">
    </el-table-column>
    <el-table-column prop="pay_method" label="支付方式" width="170">
    </el-table-column>
    <el-table-column prop="pay_time" label="支付时间" width="170">
    </el-table-column>
    <el-table-column prop="commodity_category" label="商品类别" width="180">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="170">
      <template slot-scope="scope">
        <el-button-group>
          <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" size="small"></el-button>
          <el-button type="primary" icon="el-icon-delete" size="small"></el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <!--分页 page-size:每页记录数 total：总记录数 @current-change为页数跳转事件触发器（""内填写请求方法名）-->
  <el-pagination
  :current-page="1"
  :page-size="limit"
  :total="100"
  style="padding: 30px 0; text-align: center;"
  layout="total, prev, pager, next, jumper"
  @current-change="fetchData" />

</div>
</template>

<script>
/* 先写死数据 请求参考基本属性分析的性别聚合分析vue文件编写 */
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        methodsoptions: [{valuemethod: '选项1',label: '银行卡支付'},
                         {valuemethod: '选项2',label: '网上银行'},
                         {valuemethod: '选项3',label: '电子支票'},
                         {valuemethod: '选项4',label: '第三方平台(支付宝、微信)'}],
        valuemethod: '',
        categoriesoptions: [{valuecategory: '选项1',label: '文体用品'},
                            {valuecategory: '选项2',label: '日用百货'},
                            {valuecategory: '选项3',label: '家用电器'},
                            {valuecategory: '选项4',label: '服装鞋帽'},
                            {valuecategory: '选项5',label: '手提包、箱包'},
                            {valuecategory: '选项6',label: '食品、保健品'},
                            {valuecategory: '选项7',label: '书籍音像制品'},
                            {valuecategory: '选项8',label: '化妆品和美容产品'},
                            {valuecategory: '选项9',label: '数码产品及其配件'}],
        valuecategory: '',
        provincesoptions: [{valueprovince: '选项1',label: '北京'},
                           {valueprovince: '选项2',label: '天津'},
                           {valueprovince: '选项3',label: '河北'},
                           {valueprovince: '选项4',label: '山西'},
                           {valueprovince: '选项5',label: '内蒙古'},
                           {valueprovince: '选项6',label: '辽宁'},
                           {valueprovince: '选项7',label: '吉林'},
                           {valueprovince: '选项8',label: '黑龙江'},
                           {valueprovince: '选项9',label: '上海'},
                           {valueprovince: '选项10',label: '江苏'},
                           {valueprovince: '选项11',label: '浙江'},
                           {valueprovince: '选项12',label: '安徽'},
                           {valueprovince: '选项13',label: '福建'},
                           {valueprovince: '选项14',label: '江西'},
                           {valueprovince: '选项15',label: '山东'},
                           {valueprovince: '选项16',label: '河南'},
                           {valueprovince: '选项17',label: '湖北'},
                           {valueprovince: '选项18',label: '湖南'},
                           {valueprovince: '选项19',label: '广东'},
                           {valueprovince: '选项20',label: '广西'},
                           {valueprovince: '选项21',label: '海南'},
                           {valueprovince: '选项22',label: '重庆'},
                           {valueprovince: '选项23',label: '四川'},
                           {valueprovince: '选项24',label: '贵州'},
                           {valueprovince: '选项25',label: '云南'},
                           {valueprovince: '选项26',label: '西藏'},
                           {valueprovince: '选项27',label: '陕西'},
                           {valueprovince: '选项28',label: '甘肃'},
                           {valueprovince: '选项29',label: '青海'},
                           {valueprovince: '选项30',label: '宁夏'},
                           {valueprovince: '选项31',label: '新疆'},
                           {valueprovince: '选项32',label: '台湾'},
                           {valueprovince: '选项33',label: '香港'},
                           {valueprovince: '选项34',label: '澳门'}, ],
        valueprovince: '',
        valuetime:'',
        tableData: [{
          id: '165465',
          consumption_area:'北京',
          consumption_amount:'235.2',
          pay_method:'现金',
          pay_time:'2019',
          commodity_category:'文体用品'
        }, {
          id: '465131',
          consumption_area:'上海',
          consumption_amount:'2555',
          pay_method:'微信',
          pay_time:'2020',
          commodity_category:'文体用品'
        }, {
          id: '264641',
          consumption_area:'上海',
          consumption_amount:'666',
          pay_method:'支付宝',
          pay_time:'2019',
          commodity_category:'文体用品'
        }, {
          id: '165484',
          consumption_area:'重庆',
          consumption_amount:'455',
          pay_method:'支付宝',
          pay_time:'2019',
          commodity_category:'文体用品'
        }, {
          id: '165791',
          consumption_area:'重庆',
          consumption_amount:'320',
          pay_method:'支付宝',
          pay_time:'2017',
          commodity_category:'文体用品'
        }, {
          id: '165760',
          consumption_area:'重庆',
          consumption_amount:'777',
          pay_method:'支付宝',
          pay_time:'2020',
          commodity_category:'文体用品'
        }, {
          id: '249637',
          consumption_area:'广东',
          consumption_amount:'1000',
          pay_method:'支付宝',
          pay_time:'2021',
          commodity_category:'文体用品'
        }, {
          id: '497135',
          consumption_area:'四川',
          consumption_amount:'50000',
          pay_method:'支付宝',
          pay_time:'2022',
          commodity_category:'文体用品'
        }, ]
      }
    }
  }
</script>
<style>
.tableDiv{
  width: 90%;
  margin: auto;
}
</style>
