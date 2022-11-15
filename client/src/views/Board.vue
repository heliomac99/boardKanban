<template>
  <div align="center" @click="fecharMenu()">
    <div class="col-2" style="margin-bottom: 30px;">
      <select class="form-select" v-model="boardSelecionado" @change="carregarColunas()">
        <option selected></option>
        <option v-for="board in boards" :value="board.id" :key="board.id">{{board.nome}}</option>
      </select>
    </div>

    <button v-if="primeiraColuna" class="btn btn-secondary insere primaryColorBtn" @click="abrirModal(0, primeiraColuna)">Inserir Task <font-awesome-icon icon="fa-solid fa-plus"/></button>
    
    <div style="display:flex; justify-content:center" id="divBoard">

      <div class="card colunm drop-zone" @drop="soltou(coluna.id)" @dragover.prevent="" v-for="coluna in colunas" :key="coluna.id">
        <div class="card-body board">
          <h5 class="card-title secondaryColor">{{coluna.nome}}</h5>  
          <div class="card cardTask" v-for="card in coluna.cards" @dblclick="edit(card.id)" @contextmenu.prevent="abrirMenu($event, card)" :key="card.id" style="margin-bottom: 20px;" draggable="true" @dragstart="moveu(card.id)" >
            <div>
              <h5>{{card.titulo}}</h5>
              <h8 v-if="card.autorId > 0">{{"Autor: "  + card.nomeAutor}}</h8>
            </div>    
          </div>
        </div>
      </div>

    </div>

    <ul id="menu" class="list-group">
      <li class="list-group-item menuItem" @click="abrirModal(idCardSelecionado, idColunaSelecionada)">Abrir</li>
      <li class="list-group-item menuItem" @click="excluir(idCardSelecionado)">Excluir</li>
    </ul>
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
      idColunaSelecionada: 0,
      boards:[],
      colunas: [],
      boardSelecionado:null,
      primeiraColuna: null,
    }
  },
  methods:{
    abrirMenu(e, card){
      this.idCardSelecionado = card.id;
      this.idColunaSelecionada = card.colunaId;
      const menu = document.getElementById("menu");
      let x = e.clientX, y = e.clientY
      menu.style.visibility = 'visible'
      menu.style.top = `${y}px`
      menu.style.left = `${x}px`
    },
    fecharMenu(){
      const menu = document.getElementById("menu");
      menu.style.visibility = 'hidden'
    },
    abrirModal(id, colunaId){
      this.$refs.modal.abrir(id, colunaId)
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
              this.primeiraColuna = this.colunas[0].id
            else
              this.primeiraColuna = null

            this.colunas.forEach(element => {
              axios.post('http://localhost:8000/card/carregarPorColuna', { "colunaId" : element.id }).then( (result) => {
                    element.cards = result.data
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
      axios.post("http://localhost:8000/card/delete", {id: id}).then( () => { this.carregarColunas() })
    }
  },
  mounted(){
    this.carregarBoards()
  }
}
</script>

<style>

#divBoard{
  padding: 10px;
}

.cardTask{
  background-color: #19381f;
  color:white;
  min-height: 100px;
}

.colunm{
  width: 30rem !important;
  min-height: 80vh !important;
  margin-right: 10px;
}

.colunmLast{
  width: 30rem !important;
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

#menu{
  width: 200px;
  height:300px;
  visibility: hidden;
  position:absolute;
}

.menuItem:hover{
  background-color:darkgray ;
}

</style>
