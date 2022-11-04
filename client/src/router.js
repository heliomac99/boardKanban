import { createRouter, createWebHistory } from 'vue-router';
import BoardView from './views/Board.vue'
import ListaAutorView from './views/ListaAutor.vue'

const routes = [
    {
        path: '/Board',
        name: 'Board',
        component: BoardView,
    },
    {
        path: '/ListaAutor',
        name: 'ListaAutor',
        component: ListaAutorView,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;