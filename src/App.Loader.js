/*
 * @Author: Caven
 * @Date: 2019-12-23 13:28:19
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-27 11:10:48
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 定义全局总线
const hub = new Vue()

class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    // 注册element-ui
    Vue.use(ElementUI)

    // 添加总线到Vue原型
    Vue.use({
      install(Vue, options) {
        Vue.prototype.$hub = hub
      }
    })
  }

  install() {
    return Promise.all([import('@/components'), import('@/loader/HttpLoader')])
  }
}

const loader = new AppLoader()
export default loader
