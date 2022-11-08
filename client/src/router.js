import { createRouter, createWebHistory } from 'vue-router';
import BoardView from './views/Board.vue'
import ListaParticipanteView from './views/Participante/ListaParticipante.vue'
import CadastroEdicaoParticipanteView from './views/Participante/CadastroEdicaoParticipante.vue'

import CadastroEdicaoBoardView from './views/Board/CadastroEdicaoBoard.vue'
import ListaBoardView from './views/Board/ListaBoard.vue'

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
        name: 'CadastroEdicaoParticipante',
        component: CadastroEdicaoParticipanteView,
    },
    {
        path: '/Board/CadastroEdicao/:codigoBoard',
        name: 'CadastroEdicaoBoard',
        component: CadastroEdicaoBoardView,
    },
    {
        path: '/ListaBoard',
        name: 'ListaBoard',
        component: ListaBoardView,
    },

    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;