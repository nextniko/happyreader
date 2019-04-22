import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials=true
Vue.config.productionTip = false
Vue.prototype.$http=axios
//用户登录
Vue.prototype.userchange=function(){
    var out = document.getElementsByClassName("userout")
    var login = document.getElementsByClassName("userlogin")
    var uname=sessionStorage.getItem("uname")
    if(uname==null){
        for(var i=0;i<login.length;i++){
            login[i].style="display:none;"    
        }
        for(var i=0;i<out.length;i++){
            out[i].style="display:block;"
        }
        this.islogin=false
    }else{
        this.uname=uname
        for(var i=0;i<out.length;i++){
            out[i].style="display:none;"
        }
        for(var i=0;i<login.length;i++){
            login[i].style="display:block;"
        }
        this.islogin=true
    }
}
Vue.prototype.addclass=1
Vue.prototype.change=function(i){
  Vue.prototype.addclass=i
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
