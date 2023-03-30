<template>
    <button id="abrir" data-bs-toggle="modal" data-bs-target="#modal" hidden></button>
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Criação de Card</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="padding-top:40px">
            <ValidationForm :model="card" ref="validation" @save="salvar(card)">
              <div class="form-group col-10">
                <div class="col-12">
                  <select name="autorId" class="form-select" v-model="card.autorId">
                    <option value="" selected></option>
                    <option v-for="autor in autores" :value="autor.id" :key="autor.id">{{autor.nome}}</option>
                  </select>  
                  <span name="autorId" class="spanErro"></span>  
                </div>        
              </div>

              <div class="form-group col-10">  
                  <div class="col-12">
                    <input placeholder="Título" name="titulo" v-model="card.titulo" type="text" class="form-control">
                    <span name="titulo" class="spanErro"></span>  
                  </div>
              </div>

              <div class="form-group col-10">
                <textarea placeholder="Descrição" name="descricao" v-model="card.descricao" class="form-control"></textarea>              
              </div>
        
              <div style="margin-top:50px">
                <button id="fechar" type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="margin-right:10px" hidden>Cancelar</button>
                <button type="button" v-if="card.id > 0" class="btn btn-secondary" style="margin-right:10px" @click="excluir(card.id)">Excluir</button>
                <button type="submit" class="btn btn-primary primaryColorBtn">Salvar</button>
              </div>
            </ValidationForm>
            <ModalPergunta ref="modalPergunta"></ModalPergunta>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import axios from "axios";
  import ValidationForm from './ValidationForm.vue'
  import ModalPergunta from '../components/ModalPergunta.vue'
  import emailjs from '@emailjs/browser';
  
  export default {
    name: 'ModalCard',
    components: { ValidationForm, ModalPergunta },
    data(){
      return {
        card:{
          id: 0,
          titulo: "",
          descricao: "",
          autorId: 0,
          colunaId: 0
        },
        autores:[],
        edit: false
      }
    },
    methods:{
      limparCampos(){
          this.card.titulo= ""
          this.card.descricao = ""
      },
      enviarEmail(card){
        var autor = this.autores.filter( function (el) {
          return el.id == card.autorId
        })[0]
        if(autor != null){
          try{
            emailjs.send("service_7twc9ul","template_317p5b5",{
                        to_name: autor.nome,
                        message: card.titulo,
                        send_to: autor.email,
                        link: window.location.pathname
                    }, "NakJZ8PgA-LMP8Imr") 
                }
          catch(erro){
              console.log(erro)
          } 
        }
      },
      salvar(card){
        this.enviarEmail(card)
        if(!this.edit){
          axios.post("http://localhost:8000/card/add", card).then(() => {
              this.fechar()
              this.$emit('refresh')
              this.limparCampos()
          })
          .catch((error) => {
              this.fechar()
              console.log(error);
          });
        }
        else{
          axios.post("http://localhost:8000/card/edit", card).then(() => {
              this.fechar()
              this.$emit('refresh')
              this.limparCampos()
          })
          .catch((error) => {
              this.fechar()
              console.log(error);
          });
        }
      },
      abrir(id, colunaId){
        this.card.id = id
        this.card.colunaId = colunaId

        if(id > 0){
          this.edit = true
          this.carregarCard(id)
        }
        else
          this.edit = false
        
        this.carregarAutores()
        document.getElementById('abrir').click();
      },
      fechar(){
        document.getElementById('fechar').click();
      },
      carregarAutores(){
        axios.post("http://localhost:8000/autor",).then( (result) => {
          this.autores = result.data
        } )
      },
      carregarCard(id){
        axios.post("http://localhost:8000/card/carregarRegistro",{ "id" : id },).then( (result) => {
          this.card.titulo = result.data[0].titulo
          this.card.descricao = result.data[0].descricao
          this.card.autorId = result.data[0].autorId
          this.$refs.validation.validar()
        })
      },
      async excluir(id) { 
                const ok = await this.$refs.modalPergunta.show({
                    title: 'Excluir card',
                    message: 'Tem certeza que gostaria de excluir o card?',
                    okButton: 'Sim',
                })

                if (ok) {
                    axios.post('http://localhost:8000/card/delete', {id: id}).then(() => { 
                        this.fechar()
                        this.$emit('refresh')
                        this.limparCampos()
                    })
                }
            },
    },
    mounted(){
        this.$refs.validation.required('titulo', 'Título')
    }

  }
  </script>
  
  <style>
    .mr-2{
      margin-right: 20px;
    }
  </style>
  