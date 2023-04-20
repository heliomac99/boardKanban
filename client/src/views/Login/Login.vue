<template>
    <div id="wallpaper">
        <div id="loginDiv">
            <ValidationForm id="loginForm" :model="usuario" ref="validation" @save="salvar(usuario)">
                <div class="container" id="loginContainer">
                    <label><b>Login</b></label>
                    <input type="text" class="form-control" v-model="usuario.login" placeholder="Insira seu login">

                    <label><b>Senha</b></label>
                    <input type="password" class="form-control" v-model="usuario.senha"  placeholder="Insira sua senha">

                    <button type="submit" id="loginButton" class="btn btn-secondary insere primaryColorBtn" >Login</button>
                    <label>
                    <input type="checkbox" checked="checked"> Lembrar de mim
                    </label>
                </div>
            </ValidationForm>
        </div>
    </div>
    
</template>

<script>
import ValidationForm from '@/components/ValidationForm.vue';

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
                
            }
        },

        
    }
</script>

<style>
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

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
#loginButton {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
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

/* Add padding to containers */
#loginContainer {
  padding: 20px;
  width:600px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}



</style>

