import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/Home.vue'
import ListaParticipanteView from './views/Participante/ListaParticipante.vue'
import CadastroEdicaoParticipanteView from './views/Participante/CadastroEdicaoParticipante.vue'
import CadastroEdicaoBoardView from './views/Board/CadastroEdicaoBoard.vue'
import ListaBoardView from './views/Board/ListaBoard.vue'
import LoginView from './views/Login/Login.vue'
import CadastroUsuarioView from './views/Login/CadastroUsuario.vue'


import CadastroEdicaoColunaView from './views/Board/CadastroEdicaoColuna.vue'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/CadastroUsuario',
        name: 'CadastroUsuario',
        component: CadastroUsuarioView,
    },
    {
        path: '/Home',
        name: 'Home',
        component: HomeView,
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
    {
        path: '/Board/CadastroEdicaoColuna/:codigoBoard',
        name: 'CadastroEdicaoColuna',
        component: CadastroEdicaoColunaView,
    },

    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {

    let modalBackground = document.querySelector('.modal-backdrop')
    let modal = document.querySelector('.modal-dialog')

    if (modalBackground) {
      modalBackground.remove()
      modal.remove()
    }
  
    next()
  })

export default router;