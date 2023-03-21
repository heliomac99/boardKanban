<template>
    <div align="center">
        <h3 class="primaryColor" >Cadastro Coluna</h3>
        <ValidationForm :model="coluna" ref="validation" @save="insere(coluna.nome, coluna.ordem, coluna.cor)">
            <div class="card cardColuna">
                <div class="card-body" style="margin-top:20px">
                    <div class="form-group col-10">
                        <label class="form-label col-2">Colunas</label>
                        <div class="col-3" style="margin-left:20px;">
                            <input v-model="coluna.nome" placeholder="nome" class="form-control">
                            <span name="nome" class="spanErro"></span>  
                        </div>

                        <div class="col-2" style="margin-left:20px;">
                            <input v-model="coluna.ordem" placeholder="ordem" type="number" min="0" class="form-control"> 
                            <span name="ordem" class="spanErro"></span>  
                        </div>

                        <div class="col-1" style="margin-left:20px;">
                            <input v-model="coluna.cor" type="color" class="form-control inputColor">
                            <span name="cor" class="spanErro"></span>  
                        </div>

                 
                        <button type="submit" class="btn btn-primary primaryColorBtn" style="margin-left:40px; height:40px">
                            <font-awesome-icon icon="fa-solid fa-plus"/>
                        </button>
                    </div>

                    
                    <div class="col-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style="width:10%;"></th>
                                    <th scope="col" style="width:70%;">Nome</th>
                                    <th scope="col" style="width:10%;">Ordem</th>
                                    <th scope="col" class="tdColor" style="width:10%;">Cor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="coluna in colunas" :key="coluna.nome">
                                    <td style="display:flex; justify-content:center">
                                        <button type="button" class="btn btn-primary primaryColorBtn" @click="excluir(coluna.id)">
                                            <font-awesome-icon icon="fa-solid fa-trash"/>
                                        </button>
                                    </td>
                                    <td>{{coluna.nome}}</td>
                                    <td>{{coluna.ordem}}</td>
                                    <td>
                                        <input class="form-control inputColor" type="color" :value="coluna.cor" @change="alteraCor(coluna, $event.target.value)">
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ValidationForm>
    </div>
</template>

<script>
  import ValidationForm from '../../components/ValidationForm.vue'
  import axios from 'axios'

  export default {
        name: 'CadastroEdicaoColunaView',
        components: {ValidationForm },
        data() {
            return {
                colunas: [],
                coluna:{
                    nome: null,
                    ordem: null,
                    cor: null
                }
            }
        },
        methods: {
            alteraCor(coluna, cor){
                axios.post('http://localhost:8000/coluna/alteraCor', {"colunaId": coluna.id, "cor": cor})
            },
            limpar(){
                this.coluna.nome = null
                this.coluna.ordem =  null
            },
            insere(nome, ordem, cor){
                console.log
                let coluna = {"nome": nome, "ordem": ordem, "boardId": this.$route.params.codigoBoard, "cor": cor}
                axios.post('http://localhost:8000/coluna/add', coluna).then( () => {this.carregarColunas(), this.limpar()} )
            },
            carregarColunas(){
                axios.post('http://localhost:8000/coluna/carregarPorBoard', { "boardId" : this.$route.params.codigoBoard }).then( (result) => {
                    this.colunas = result.data
                } )
            },
            excluir(id){
                axios.post('http://localhost:8000/coluna/delete', { "id" : id}).then( () =>{ this.carregarColunas() } )
            }
        },
        mounted(){
            this.$refs.validation.required('nome','Nome')
            this.$refs.validation.required('ordem','Ordem')
            this.carregarColunas()
        }

        
    }
</script>

<style>

.cardColuna{
    padding: 0
}

table {
    width: 80% !important;
    overflow-x: auto;
    white-space: nowrap;
}

.inputColor{
    min-width: 40px;
}

</style>

