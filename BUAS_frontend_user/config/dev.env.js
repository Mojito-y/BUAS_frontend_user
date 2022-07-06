'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_API: '""',
  BASE_API: '"http://localhost:8081"',     //指定绑定的后端接口路径 也是基本url前缀 示例：http://localhost:xxxx
})
