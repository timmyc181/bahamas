import './assets/main.css'
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import Dock from '@/components/dock/Dock.vue'
import LandingPage from '@/components/LandingPage.vue'
import TurtlesNest from '@/components/turtles_nest/TurtlesNest.vue'
import axios from 'axios'

import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import VueTheMask from 'vue-the-mask'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'


const routes = [
	{path: '/', component: LandingPage, name: 'home'},
	{path: '/dock', component: Dock, name: 'dock'},
	{path: '/turtle-nest', component: TurtlesNest, name: 'turtle-nest'},
	{path: '/about', component: AboutPage, name: 'about'},
	{path: '/contact', component: ContactPage, name: 'contact'},
	{path: '/:pathMatch(.*)*', redirect: '/'}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

createApp(App)
	.use(VueTheMask)
	.use(router)
	.use(VueAxios, axios)
	.mount('#app')
