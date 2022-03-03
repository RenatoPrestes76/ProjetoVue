<template>
  <div id="containerFooter">
                <div id="footer">
                    <p id="footerMsg">
                        Essa janela do navegador é usada para manter sua sessão de 
                        aitentificação ativa. Deixe-a em segundo plano e abra uma 
                        nova janela para continuar a navegar.
                    </p>
                    <div id="verticalLine"></div>
                    <p id="refleshMsg">
                        Application <br> refresh in
                    </p>
                    <div id="timeBox">
                        <h1 id="time-box">600</h1>
                        <p>seconds</p>
                    </div>
                    <div id="continueMsg">
                        <p>Continuar<br>Navegando</p>
                    </div>
                    <button id="logout">Logout</button>
                </div>  
            </div>
</template>

<script>
import Title from '@/components/title/index.vue';

export default {
  components: {
    textContent
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
