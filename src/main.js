import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router'
import pinia from './plugins/pinia/pinia'

const app = createApp(App)

app
    .use(router)
    .use(pinia)
    .mount('#app')
