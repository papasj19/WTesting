import './assets/main.css'
// add this
import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/Router/index.js";

createApp(App).use(router).mount('#app')
