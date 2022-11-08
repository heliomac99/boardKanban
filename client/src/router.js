import { createRouter, createWebHistory } from 'vue-router';
import BoardView from './views/Board.vue'
import ListaParticipanteView from './views/Participante/ListaParticipante.vue'
import CadastroEdicaoParticipanteView from './views/Participante/CadastroEdicaoParticipante.vue'

const routes = [
    {
        path: '/Board',
        name: 'Board',
        component: BoardView,
    },
    {
        path: '/ListaParticipante',
        name: 'ListaParticipante',
        component: ListaParticipanteView,
    },
    {
        path: '/Participante/CadastroEdicao/:codigoParticipante',
        name: 'cadastroedicaoparticipante',
        component: CadastroEdicaoParticipanteView,
    },

    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;