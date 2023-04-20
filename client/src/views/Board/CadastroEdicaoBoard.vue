<template>
    <div align="center" id="content">
        <h3 class="primaryColor" >Cadastro Board</h3>
        <div align="center">
            <div class="card">
                <div class="card-body" style="padding-top:35px; padding-bottom:30px">
                    <ValidationForm :model="board" ref="validation" @save="salvar(board)">

                        <div class="form-group col-10">
                            <label class="form-label col-2" style="margin-right:20px">Nome</label>
                            <div class="col-10" >
                                <input v-model="board.nome" id="nome" class="form-control"> 
                                <span name="nome" class="spanErro"></span>     
                            </div>
                        </div>

                        <div id="actionButtons" style="margin-top:50px">
                            <button v-if="board.id > 0" @click="excluir(board)" type="button" style="margin-right: 5px;" class="btn btn-secondary primaryColorBtn">Excluir</button>
                            <button type="submit" class="btn btn-success secondaryColorBtn">Salvar</button>
                            <ModalPergunta ref="modalPergunta"></ModalPergunta>
                        </div>
                    </ValidationForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import ModalPergunta from '../../components/ModalPergunta.vue'
  import ValidationForm from '../../components/ValidationForm.vue'
  import axios from 'axios'

  export default {
        name: 'CadastroEdicaoBoardView',
        components: { ModalPergunta, ValidationForm },
        data() {
            return {
                board: {
                    id: this.$route.params.codigoBoard,
                    nome: null,
                    usuarioId: this.$store.state.usuario.id,
                    colunas: []
                },
                coluna:{
                    nomeColuna: null,
                    ordemColuna: null
                }
            }
        },
        methods: {
            insereColuna(nome, ordem){
                let coluna = {"nome": nome, "ordem": ordem, "idBoard": this.board.id}
                axios.post('http://localhost:8000/coluna/add', coluna)
            },
            salvar(board) { 
                if(board.id > 0){
                    axios.post('http://localhost:8000/board/update', board).then(
                        this.$swal("Sucesso", "Board registrado com sucesso!", "success"),
                        this.$router.back()
                    )
                }
                else{
                    axios.post('http://localhost:8000/board/add', board).then(
                        this.$swal("Sucesso", "Board registrado com sucesso!", "success"),
                        this.$router.back()                 
                    )
                }      
            },           
            async excluir(board) { 
                const ok = await this.$refs.modalPergunta.show({
                    title: 'Excluir Board',
                    message: 'Tem certeza que gostaria de excluir o board?',
                    okButton: 'Sim',
                })

                if (ok) {
                    axios.post('http://localhost:8000/board/delete', {id: board.id}).then(() => { 
                        this.$swal("Sucesso", "Board excluído com sucesso!", "success"),
                        this.$router.back()
                    })
                }
            },
            recuperarDados() { 
                axios.post('http://localhost:8000/board/carregarRegistro', {id: this.board.id}).then( (result) => {
                    this.board.nome = result.data[0].nome                
                   }
                )
            },
        },
        mounted(){
            if(this.board.id > 0)
                this.recuperarDados()

            this.$refs.validation.required('nome','Nome')
        }

        
    }
</script>

<style>

.cardColuna{
    padding: 0
}

</style>

