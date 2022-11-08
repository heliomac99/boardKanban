<template>
  <div align="center">
    <div class="col-2" style="margin-bottom: 30px;">
      <select class="form-select" v-model="boardSelecionado" @change="carregarColunas()">
        <option selected></option>
        <option v-for="board in boards" :value="board.id" :key="board.id">{{board.nome}}</option>
      </select>
    </div>

    <button v-if="primeiraColunaBoardSelecionado" class="btn btn-secondary insere primaryColorBtn" @click="abrirModal(0, primeiraColunaBoardSelecionado)">Inserir Task <font-awesome-icon icon="fa-solid fa-plus"/></button>
    
    <div style="display:flex; justify-content:center">

      <div class="card colunm drop-zone" @drop="soltou(coluna.id)" @dragover.prevent="" v-for="coluna in colunas" :key="coluna.id">
        <div class="card-body board">
          <h5 class="card-title secondaryColor">{{coluna.nome}}</h5>  
          <div class="card cardTask" v-for="card in coluna.cards" @dblclick="edit(card.id)" :key="card.id" style="margin-bottom: 20px;" draggable="true" @dragstart="moveu(card.id)" >
            <div>
              <h5>{{card.titulo}}</h5>
              <p v-if="card.autorId > 0">{{"Autor: "  + card.nomeAutor}}</p>
            </div>    
          </div>
        </div>
      </div>

    </div>

    <ModalCard ref="modal" @refresh="carregarColunas"></ModalCard>
  </div>

</template>

<script>
import ModalCard from '../components/ModalCard.vue'
import axios from "axios";
export default {
  name: 'BoardView',
  components: { ModalCard },
  data(){
    return{
      idCardSelecionado: 0,
      boards:[],
      colunas: [],
      boardSelecionado:null,
      primeiraColunaBoardSelecionado: null
    }
  },
  methods:{
    abrirModal(id, idBoardSelecionado){
      this.$refs.modal.abrir(id, idBoardSelecionado)
    },
    carregarBoards(){
      axios.post("http://localhost:8000/board").then((res) => {
            this.boards = res.data
      })
    },
    carregarColunas(){
      axios.post('http://localhost:8000/coluna/carregarPorBoard', { "boardId" : this.boardSelecionado }).then( (result) => {
            this.colunas = result.data

            if(this.colunas[0])
              this.primeiraColunaBoardSelecionado = this.colunas[0].id
            else
              this.primeiraColunaBoardSelecionado = null

            this.colunas.forEach(element => {
              axios.post('http://localhost:8000/card/carregarPorColuna', { "colunaId" : element.id }).then( (result) => {
                    element.cards = result.data
                    console.log(element)
              })
            })
      })
    },
    moveu(id){
      this.idCardSelecionado = id
    },
    soltou(colunaId){
      axios.post("http://localhost:8000/moverCard", { "colunaId": colunaId, id: this.idCardSelecionado}).then( () => { this.carregarColunas() })
    },
    edit(id){
      this.$refs.modal.abrir(id)
    },
    excluir(id){
      axios.post("http://localhost:8000/card/delete", {id: id}).then( () => { this.carregarCards() })
    }
  },
  mounted(){
    this.carregarBoards()
  }
}
</script>

<style>

.cardTask{
  background-color: #19381f;
  color:white;
  max-height: 150px;
}

.colunm{
  width: 30rem;
  min-height: 80vh !important;
  margin-right: 30px;
}

.colunmLast{
  width: 30rem;
  min-height: 80vh !important;
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

</style>
