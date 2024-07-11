import './assets/main.css'
import Dock from '@/components/dock/Dock.vue'
import LandingPage from '@/components/LandingPage.vue'
import TurtlesNest from '@/components/turtles_nest/TurtlesNest.vue'

import { createApp } from 'vue'
import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

const routes = [
	{path: '/', component: LandingPage},
	{path: '/dock', component: Dock},
	{path: '/turtles-nest', component: TurtlesNest},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

createApp(App)
	.use(router)
	.mount('#app')
