'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://172.20.10.7:8080"',
  STATIC_URL: '"http://www.weihaoyue.top"'
})