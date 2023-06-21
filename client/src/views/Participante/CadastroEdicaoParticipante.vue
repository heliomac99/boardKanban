<template>
    <div align="center" id="content">
        <h3 class="primaryColor" >Cadastro Participante</h3>
        <div align="center">
            <div class="card">
                <div class="card-body" style="padding-top:35px; padding-bottom:30px">
                    <ValidationForm :model="participante" ref="validation" @save="salvar(participante)">
                        <div class="form-group col-10">
                            <label class="form-label col-2" style="margin-right:20px">Nome</label>
                            <div class="col-10" >
                                <input v-model="participante.nome" id="nome" class="form-control"> 
                                    <span name="nome" class="spanErro"></span>     
                            </div>
                        </div>

                        <div class="form-group col-10">
                            <label class="form-label col-2" style="margin-right:20px">E-mail</label>
                            <div class="col-10" >
                                <input v-model="participante.email" id="email" class="form-control"> 
                                    <span name="email" class="spanErro"></span>     
                            </div>
                        </div>

                        <div id="actionButtons" style="margin-top:50px">
                            <button v-if="participante.id > 0" @click="excluir(participante)" type="button" style="margin-right: 5px;" class="btn btn-secondary primaryColorBtn">Excluir</button>
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
        name: 'CadastroEdicaoParticipanteView',
        components: { ModalPergunta, ValidationForm, ToastComponent },
        data() {
            return {
                participante: {
                    id: this.$route.params.codigoParticipante,
                    nome: null,
                    email: null,
                },
            }
        },
        methods: {
            salvar(participante) { 
                if(participante.id > 0){
                    axios.post('http://localhost:8000/autor/update', participante).then(
                        this.$refs.toast.ativar('Participante salvo com sucesso.', 'sucesso'),
                        this.$router.back()
                    )
                }
                else{
                    axios.post('http://localhost:8000/autor/add', participante).then( (res) =>{
                            if(!res.data.emailValido)
                                this.$refs.validation.insereErro("email", "E-mail já está sendo utilizado.")
                            else{
                                this.$refs.toast.ativar('Participante salvo com sucesso.', 'sucesso'),
                                this.$router.back()
                            }
                        }
                    )
                }  
            },           
            async excluir(participante) { 
                const ok = await this.$refs.modalPergunta.show({
                    title: 'Excluir Participante',
                    message: 'Tem certeza que gostaria de excluir o participante?',
                    okButton: 'Sim',
                })

                if (ok) {
                    axios.post('http://localhost:8000/autor/delete', {id: participante.id}).then(() => { 
                        this.$refs.toast.ativar('Participante excluído com sucesso.', 'sucesso'),
                        this.$router.back()
                    })
                }
            },
            recuperarDados() { 
                axios.post('http://localhost:8000/autor/carregarRegistro', {id: this.participante.id}).then( (result) => {
                    this.participante.email = result.data[0].email
                    this.participante.nome = result.data[0].nome
                   }
                )
            },
        },
        mounted(){
            if(this.participante.id > 0)
                this.recuperarDados()

            this.$refs.validation.required('nome','Nome')
            this.$refs.validation.required('email','E-mail')
            this.$refs.validation.email('email', 'E-mail')
        }

        
    }
</script>

<style>
    .form-group {
        margin-bottom:30px;
        display:flex;
    }

    .card {
        max-width: 80rem;
        margin-top:30px;
        padding:2rem;
    }

    .radioInput {
        margin-left:0.1px !important;
        margin-right:2px !important;
    }

</style>

