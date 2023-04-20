<template>
    <div id="wallpaper">
        <div id="loginDiv">
            <ValidationForm id="loginForm" :model="usuario" ref="validation" @save="salvar(usuario)">
                <div class="container" id="loginContainer">

                    <font-awesome-icon @click="irParaLogin()" style="font-size:xx-large; margin-bottom: 15px; cursor:pointer" icon="fa-solid fa-arrow-left" />
                    <h3 id="cadastroUsuarioTitle">Cadastro de Usuário</h3>

                    <div class="divInput">
                        <label class="loginLabel">Nome</label>
                        <input type="text" class="form-control loginInput" v-model="usuario.nome" placeholder="Insira seu nome">
                        <span name="nome" class="spanErro"></span>  
                    </div>

                    <div class="divInput">
                        <label class="loginLabel">Login</label>
                        <input type="text" class="form-control loginInput" v-model="usuario.login" placeholder="Insira seu login">
                        <span name="login" class="spanErro"></span>  
                    </div>

                    <div class="divInput">
                        <label class="loginLabel">Senha</label>
                        <input type="password" class="form-control loginInput" v-model="usuario.senha"  placeholder="Insira sua senha">
                        <span name="senha" class="spanErro"></span>
                    </div>
                                         
                    <button type="submit" id="loginButton" class="btn btn-secondary insere primaryColorBtn" >Salvar</button>                  

                </div>
            </ValidationForm>
        </div>
    </div>
    
</template>

<script>
import ValidationForm from '@/components/ValidationForm.vue';
import axios from 'axios';

  export default {
        name: 'LoginView',
        components: {ValidationForm },
        data() {
            return {
                usuario:{
                    login: null,
                    senha: null,
                    nome: null
                }
            }
        },
        methods: {
           salvar(usuario){
            axios.post('http://localhost:8000/usuario/add', usuario).then( (res) =>{ 
                    if(!res.data.valido)
                        this.$refs.validation.insereErro("login", "Login já está sendo utilizado.")
                    else
                        this.$router.push('/')
                } )
           },
           irParaLogin(){
                this.$router.push('/')
           }
        },  
        mounted(){
            this.$refs.validation.required('login',"Login")
            this.$refs.validation.required('senha',"Senha")
            this.$refs.validation.required('nome',"Nome")
        }      
    }
</script>

<style>

#cadastroUsuarioTitle{
    margin-bottom: 20px;
}


</style>

