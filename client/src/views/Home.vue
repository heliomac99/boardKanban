﻿<template>
  <div align="center" @click="fecharMenu()">
    <div class="col-2" style="margin-bottom: 30px;">
      <select class="form-select" v-model="boardSelecionado" @change="carregarColunas()">
        <option selected></option>
        <option v-for="board in boards" :value="board.id" :key="board.id">{{board.nome}}</option>
      </select>
    </div>

    <button v-if="idPrimeiraColuna" class="btn btn-secondary insere primaryColorBtn" @click="abrirModal(0, idPrimeiraColuna)">Inserir Task <font-awesome-icon icon="fa-solid fa-plus"/></button>
    
    <div id="divBoard">
      <div class="card colunm drop-zone" @drop="soltou(coluna.id)" @dragover.prevent="" v-for="coluna in colunas" :key="coluna.id">
        <div class="card-body board">
          <h5 class="card-title secondaryColor">{{coluna.nome}}</h5>  
          <div class="card cardTask" v-for="card in coluna.cards" @dblclick="edit(card.id)" v-bind:style="style(coluna)" @contextmenu.prevent="abrirMenu($event, card)" :key="card.id" style="margin-bottom: 20px;" draggable="true" @dragstart="moveu(card.id, coluna.id)" >
            <div id="divCard">
              <h8 class="textoCard" >{{card.titulo}}</h8>
              <br>
              <h8 class="textoCard" v-if="card.autorId > 0">{{"Autor: "  + card.nomeAutor}}</h8>
            </div>    
          </div>
        </div>
      </div>
    </div>


    <MenuCard ref="menu"></MenuCard>
    <ModalCard v-if="sessaoValida" ref="modal" @refresh="carregarColunas"></ModalCard>
    <ToastComponent ref="toast"></ToastComponent>
  </div>

</template>

<script>
import ModalCard from '../components/ModalCard.vue'
import MenuCard from '../components/MenuCard.vue'
import ToastComponent from '../components/ToastComponent.vue'
import axios from "axios";
import { mapState } from 'vuex';

export default {
  name: 'BoardView',
  components: { ModalCard, MenuCard, ToastComponent },
  data(){
    return{
      idCardSelecionado: 0,
      idColunaOrigem: 0,
      boards:[],
      colunas: [],
      boardSelecionado:null,
      idPrimeiraColuna: null,
      sessaoValida: true
    }
  },
  computed: mapState(['sessaoValida']),
  methods:{ 
    style(coluna){
      return {
        backgroundColor: coluna.cor
      }
    },
    abrirMenu(e, card){
      this.$refs.menu.abrir(card, e.clientX, e.clientY)
    },
    fecharMenu(){
      if(this.$refs.menu)
        this.$refs.menu.fechar()
    },
    abrirModal(id, colunaId){
      this.$refs.modal.abrir(id, colunaId)
    },
    carregarBoards(){
      axios.post("http://localhost:8000/boardPorUsuario", { "usuarioId": this.$store.state.usuario.id } ).then((res) => {
            this.boards = res.data
      })
    },
    carregarColunas(){
      axios.post('http://localhost:8000/board/carregarBoard', { "boardId" : this.boardSelecionado }).then((result) => {
        this.colunas = result.data
        if(this.colunas[0])
          this.idPrimeiraColuna = this.colunas[0].id
      })
    },
    moveu(id, idColunaOrigem){
      this.fecharMenu()
      this.idColunaOrigem = idColunaOrigem
      this.idCardSelecionado = id
    },
    soltou(idColunaDestino){
      var colunaDestino = this.colunas.filter(x => {
        return x.id == idColunaDestino
      })[0]
      var qntCardsColunaDestino = colunaDestino.cards.length
      axios.post("http://localhost:8000/moverCard", { "colunaId": idColunaDestino, "id": this.idCardSelecionado, "ordem": qntCardsColunaDestino + 1}).then( () => { this.carregarColunas() })
    },
    edit(id){
      this.$refs.modal.abrir(id)
    },
    excluir(id){
      axios.post("http://localhost:8000/card/delete", {id: id}).then( () => { this.carregarColunas(), this.$refs.toast.ativar('Card excluído com sucesso.', 'sucesso')})
    },
    emMudancaDeTamanhoDaTela() {
      window.addEventListener("resize", () => {
        this.fecharMenu();
      });
    },
  },
  mounted(){
    this.carregarBoards()
    this.emMudancaDeTamanhoDaTela()
  },
  
}
</script>

<style>
.textoCard{
  font-size: small;
}
#divCard {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

#divBoard{
  display:flex;
  max-width: 85vw;
  height: fit-content;
  overflow: auto;
}

.cardTask{
  background-color: black;
  color:white;
  height: 100px;
}

.colunm{
  width: 200px !important;
  min-height: 80vh !important;
  margin-right: 10px;
  min-width:200px;
}

.colunmLast{
  width: 20rem !important;
  min-height: 80vh !important;
  margin-right: 0px !important;
}

.insere{
  margin-bottom: 30px;
}
.spanErro{
  font-size: small;
}

.modal-content{
  width: 600px !important;
}

.card-title{
  margin-bottom: 20px !important;
}

.card{
  padding: 10px !important;
}

</style>
