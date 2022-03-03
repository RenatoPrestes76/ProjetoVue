<template> 
     <section id="login"> 
            <div class="text-ola" id="text-ola">
                <img  id="midiaLogoCompass" draggable="false" src="./assets/LogoCompassText.png" alt="imagem-compass">
                <div id="containerText">
                    <div id="text">
                        <h2>Olá,</h2>
                        <p id="frase-login">Para continuar navegando de forma<br> segura, efetue o login na rede.</p>
                        <h1>Login</h1>
                    </div>
                    <div id="containerImput">               
                        <div id="textInput" class="imput">
                            <div class="test">
                                <input autocomplete="off" type="text" id="user" class="input" placeholder="Usuário"></input>
                                <img  draggable="false" src="./assets/login.png">
                            </div>
                        </div>
                        <div id="passwordInput" class="imput">
                            <div class="test">
                                <input autocomplete="off" type="password" id="password" class="input" placeholder="Senha"></input>
                                <img  draggable="false" src="./assets/password.png">
                            </div>
                        </div>
                        <div id="textErro">
                            <p>Ops, usuário ou senha inválidos.<br> Tente novamente!</p>
                        </div>
                        <div id="buttonLogin">
                            <button>Continuar</button>
                        </div>
                    </div> 
                </div>
            </div>    
            <div class="banner1-img" id="banner1">
               <div id="logoCompassText">
                <img   draggable="false" src="./assets/LogoCompassText.png" alt="imagem-compass">
            </div>
            </div>         
        </section>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import titleContent from '@/components/title/index.vue'
import Input from '@/components/input/index.vue'
    export default {
        name: 'login',
        components: {
            titleContent,
            textContent,
            Input,
        },
    }
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>