require('paratag')
require('../static/font-awesome/css/font-awesome.css')
window.axios = require('../static/axios')

var App = require('../src/app')
var Vue = require('../static/vue')
var Header = require('../src/components/ta-header')
var Aside = require('../src/components/ta-aside')
var Content = require('../src/components/ta-content')

Vue.component('ta-header',Header)
Vue.component('ta-aside',Aside)
Vue.component('ta-content',Content)
var app = new Vue(App)