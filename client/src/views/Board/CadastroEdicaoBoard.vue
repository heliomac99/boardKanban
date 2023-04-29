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
    <ToastComponent ref="toast"></ToastComponent>
</template>

<script>
  import ModalPergunta from '../../components/ModalPergunta.vue'
  import ValidationForm from '../../components/ValidationForm.vue'
  import axios from 'axios'
  import ToastComponent from '@/components/ToastComponent.vue'

  export default {
        name: 'CadastroEdicaoBoardView',
        components: { ModalPergunta, ValidationForm, ToastComponent },
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
                axios.post('coluna/add', coluna)
            },
            salvar(board) { 
                if(board.id > 0){
                    axios.post('board/update', board).then(
                        this.$refs.toast.ativar('Board salvo com sucesso.', 'sucesso'),
                        this.$router.back()
                    )
                }
                else{
                    axios.post('board/add', board).then(
                        this.$refs.toast.ativar('Board salvo com sucesso.', 'sucesso'),
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
                    axios.post('board/delete', {id: board.id}).then(() => { 
                        this.$refs.toast.ativar('Board excluído com sucesso.', 'sucesso'),
                        this.$router.back()
                    })
                }
            },
            recuperarDados() { 
                axios.post('board/carregarRegistro', {id: this.board.id}).then( (result) => {
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

