import { createWebHistory, createRouter } from "vue-router";
import LogIn from "./components/LogIn.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AlumnosComponent from "./components/AlumnosComponent.vue";
import PerfilAlumno from "./components/PerfilAlumno.vue";
import CreateAlumno from "./components/CreateAlumno.vue";


const myRoutes = [
    {
        path: '/', component: HelloWorld
    },
    {
        path: '/login', component: LogIn
    },
    {
        path: '/alumnos', component: AlumnosComponent
    },
    {
        path: '/perfil/:id', component: PerfilAlumno
    },
    {
        path: '/create', component: CreateAlumno
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;