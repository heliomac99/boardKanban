<template>
  <div align="center">
    <button class="btn btn-secondary insere" @click="abrirModal"><font-awesome-icon icon="fa-solid fa-plus"/></button>
    <div style="display:flex; justify-content:center">
      <div class="card colunm drop-zone" @drop="soltou($event)" @dragover.prevent="">
        <div class="card-body" estagio="1">
            <h5 class="card-title">BackLog</h5>  

          <div class="card" v-for="card in cardsBacklog" :key="card.id" style="margin-bottom: 20px;" draggable="true" @dragstart="moveu(card.id)" >
            <div class="card-body" style="height: 100px;">
              <h5>{{card.titulo}}</h5>
              <p>{{"Autor: "  + card.nomeAutor}}</p>
            </div>
          </div>

        </div>
      </div>

      <div class="card colunm drop-zone" @drop="soltou($event)" @dragover.prevent="">
        <div class="card-body" estagio="2">
          <h5 class="card-title">Em Desenvolvimento</h5>

          <div class="card" v-for="card in cardsDesenvolvimento" :key="card.id" style="margin-bottom: 20px;" draggable="true" @dragstart="moveu(card.id)">
            <div class="card-body" style="height: 100px;">
              <h5>{{card.titulo}}</h5>
              <p>{{"Autor: "  + card.nomeAutor}}</p>
            </div>
          </div>

        </div>
      </div>

      <div class="card colunmLast drop-zone" @drop="soltou($event)" @dragover.prevent="">
        <div class="card-body" estagio="3">
          <h5 class="card-title">Finalizado</h5>

          <div class="card" v-for="card in cardsFinalizado" :key="card.id" style="margin-bottom: 20px;" draggable="true" @dragstart="moveu(card.id)">
            <div class="card-body" style="height: 100px;">
              <h5>{{card.titulo}}</h5>
              <p>{{"Autor: "  + card.nomeAutor}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <ModalCard ref="modal" @refresh="carregarCards"></ModalCard>
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
      cardsBacklog:[],
      cardsDesenvolvimento:[],
      cardsFinalizado:[],
      idCardSelecionado: 0,
      estagioSelecionado: null
    }
  },
  methods:{
    abrirModal(){
      this.$refs.modal.abrir()
    },
    carregarCards(){
      axios.post("http://localhost:8000/listarBackLog").then((res) => {
                this.cardsBacklog = res.data.data
      })
      axios.post("http://localhost:8000/listarDesenvolvimento").then((res) => {
                this.cardsDesenvolvimento = res.data.data
      })
      axios.post("http://localhost:8000/listarFinalizado").then((res) => {
                this.cardsFinalizado = res.data.data
      })

    },
    moveu(id){
      this.idCardSelecionado = id
    },
    soltou(e){
      this.estagioSelecionado = e.target.getAttribute('estagio')
      console.log(this.estagioSelecionado, this.idCardSelecionado)
      axios.post("http://localhost:8000/moverCard", {estagio: this.estagioSelecionado, id: this.idCardSelecionado}).then( () => { this.carregarCards() })
    },
  },
  mounted(){
    this.carregarCards()
  }




}
</script>

<style>

.colunm{
  width: 30rem;
  min-height: 80vh !important;
  margin-right: 30px;
}

.colunmLast{
  width: 30rem;
  min-height: 80vh !important;
}

.card-body{
  font-family: 'Roboto Mono', monospace;
}

.insere{
  padding:initial;
  margin-bottom: 30px;
  width:25px;
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
