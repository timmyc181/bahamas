import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import Dock from '@/components/dock/Dock.vue'
import LandingPage from '@/components/LandingPage.vue'
import TurtlesNest from '@/components/turtles-nest/TurtlesNest.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{path: '/', component: LandingPage, name: 'home', meta: {title: 'Storr Villas'}},
	{path: '/dock', component: Dock, name: 'dock', meta: {title: 'Tahiti Beach Dock | Storr Villas'}},
	{path: '/turtle-nest', component: TurtlesNest, name: 'turtle-nest', meta: {title: 'Turtle Nest | Storr Villas'}},
	{path: '/about', component: AboutPage, name: 'about', meta: {title: 'About | Storr Villas'}},
	{path: '/contact', component: ContactPage, name: 'contact', meta: {title: 'Contact | Storr Villas'}},
	{path: '/:pathMatch(.*)*', redirect: '/'}
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from) => {
	document.title = to.meta?.title ?? 'Storr Villas'
})