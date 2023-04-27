import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state () {
      return {
        usuario: { "id" : -1, "nome": ''},
        tokenJWT: null
      }
    },
    mutations: {
      login(state, obj) {
        if(obj) {
            state.usuario = { "id" : obj.usuario.id, "nome": obj.usuario.nome}
            state.tokenJWT = obj.token
        }
      },
      logout(state) {
        state.usuario = { "id" : -1, "nome": ""}
        state.tokenJWT = null
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