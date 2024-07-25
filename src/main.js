import './assets/main.css'
import axios from 'axios'

import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'

import { router } from '@/router.js'


createApp(App)
	.use(VueTheMask)
	.use(router)
	.use(VueAxios, axios)
	.mount('#app')
