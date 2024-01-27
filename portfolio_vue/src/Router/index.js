import Contact from "@/Views/Contact.vue";
import Home from "@/Views/Home.vue";
import Services from "@/Views/Services.vue";
import Qualifications from "@/Views/Qualifications.vue";

import {createRouter, createWebHistory} from 'vue-router'


const routes = [

    {
        path: '/Qualifications',
        name: 'Qualifications',
        component: Qualifications
    },
    {
        path: '/Services',
        name: 'Services',
        component: Services
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router