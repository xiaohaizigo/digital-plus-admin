import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import router from './routers/index'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app=createApp(App);

app.use(ElementPlus);
app.use(router);

//注册elementPlus icons 
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
} 

app.mount('#app');

