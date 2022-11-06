<template>
    <button id="abrir" data-bs-toggle="modal" data-bs-target="#modal" hidden></button>
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Criação de Card</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ValidationForm :model="card" ref="validation" @save="salvar(card)">
              <div class="form-group col-10">
                <label class="col-form-label col-2">Autor</label>
                <div class="col-10">
                  <select name="autorId" class="form-select" v-model="card.autorId">
                    <option selected></option>
                    <option v-for="autor in autores" :value="autor.id" :key="autor.id">{{autor.nome}}</option>
                  </select>  
                  <span name="autorId" class="spanErro"></span>  
                </div>        
              </div>

              <div class="form-group col-10">  
                  <label class="col-form-label col-2">Título</label>
                  <div class="col-10">
                    <input name="titulo" v-model="card.titulo" type="text" class="form-control">
                    <span name="titulo" class="spanErro"></span>  
                  </div>
              </div>

              <div class="form-group col-10">
                <label class="col-form-label col-2">Descrição</label>
                <textarea name="descricao" v-model="card.descricao" class="form-control"></textarea>              
              </div>
        
              <div style="margin-top:50px">
                <button id="fechar" type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="margin-right:10px">Cancelar</button>
                <button type="submit" class="btn btn-primary primaryColorBtn">Salvar</button>
              </div>
            </ValidationForm>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import axios from "axios";
  import ValidationForm from './ValidationForm.vue'
  
  export default {
    name: 'ModalCard',
    components: { ValidationForm },
    data(){
      return {
        card:{
          titulo: "",
          descricao: "",
          estagio: 1,
          autorId: 0
        },
        autores:[]
      }
    },
    methods:{
      limparCampos(){
          this.card.titulo= ""
          this.card.descricao = ""
      },
      salvar(card){
        console.log(card)
        axios.post("http://localhost:8000/card/add", card,)
            .then(() => {
                this.fechar()
                this.$emit('refresh')
                this.limparCampos()
            })
            .catch((error) => {
                this.fechar()
                console.log(error);
            });
      },
      abrir(){
        this.carregarAutores()
        document.getElementById('abrir').click();
      },
      fechar(){
        document.getElementById('fechar').click();
      },
      carregarAutores(){
        axios.post("http://localhost:8000/autor",).then( (result) => {
          this.autores = result.data
          console.log(this.autores)
        } )
      }
    },
    mounted(){
        this.$refs.validation.required('titulo', 'Título')
        this.$refs.validation.required('autorId', 'Autor')
    }

  }
  </script>
  
  <style>
    .mr-2{
      margin-right: 20px;
    }
  </style>
  