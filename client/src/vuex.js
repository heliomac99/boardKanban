import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state () {
      return {
        usuario: { "id" : -1, "nome": '' }
      }
    },
    mutations: {
      login(state, usuario) {
        if(usuario) {
            state.usuario = { "id" : usuario.id, "nome": usuario.nome}
        }
      },
      logout(state) {
        state.usuario = { "id" : -1, "nome": ""}
      },
    },
    getters:{
        getUsuarioNome(state){
            return state.usuario.nome
        },
    },
    plugins: [createPersistedState()],  
  })
  

export default store;