<template>
    <div id="wallpaper">
        <div id="loginDiv">
            <ValidationForm id="loginForm" :model="usuario" ref="validation" @save="salvar(usuario)">
                <div class="container" id="loginContainer">

                    <div>
                        <div>
                            <label class="loginLabel">Login</label>
                            <input type="text" class="form-control loginInput" v-model="usuario.login" placeholder="Insira seu login">
                        </div>
                        <span name="login" class="spanErro"></span>  
                    </div>
                    <div>
                        <label class="loginLabel">Senha</label>
                        <input type="password" class="form-control loginInput" v-model="usuario.senha"  placeholder="Insira sua senha">
                        <span name="senha" class="spanErro"></span>
                    </div>

                    <label class="loginLabel" style="margin-top:15px">
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>

                    <button type="submit" id="loginButton" class="btn btn-secondary insere primaryColorBtn" >Login</button>

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
                    senha: null
                }
            }
        },
        methods: {
            salvar(usuario){
                axios.post('http://localhost:8000/usuario/validar', { "login" : usuario.login, "senha": usuario.senha}).then( (res) =>{ 
                    if(res.data.valido){
                        this.$store.commit('login', res.data.usuario)
                        this.$router.push('/home')
                    }                    
                    else
                        this.$refs.validation.insereErrorMessage('senha', 'Usuário ou senha inválidos')
                } )
            }
        },
        mounted(){
            this.$refs.validation.required('login',"Login")
            this.$refs.validation.required('senha',"Senha")
        }

        
    }
</script>

<style>
.loginLabel{
    position: absolute;
}
#wallpaper{
    width: 100vw !important;
    height: 100vh !important;
    background:url(../../assets/teste.png);  
}

#loginDiv{
    display:flex;
    justify-content: center;
    position: absolute;
    width: 300px;
    height: 200px;
    z-index: 15;
    top: 30%;
    left: 50%;
    margin: -100px 0 0 -150px;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

#loginButton {
    
  margin-top:40px !important;
  margin-bottom:30px !important;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

#loginForm{
    width: 700px;
    height: 350px;
    border: 3px solid #f1f1f1;
    background-color: white;
    border-radius: 30px;
    padding: 10px;
}

#loginContainer {
  padding: 20px;
  width:500px;
}

.loginInput{
    margin-top:25px !important;
}




</style>

