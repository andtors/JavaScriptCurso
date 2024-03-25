import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store  from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Temporario!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkFuZHJlIFRvcnJlcyIsImVtYWlsIjoiYW5kcmVAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTcxMTM3NDEzNSwiZXhwIjoxNzExNjMzMzM1fQ.ftfnCTtUqpS8PCKY9m-wz0HAPR11idxs8RLAG7K8fvg'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')