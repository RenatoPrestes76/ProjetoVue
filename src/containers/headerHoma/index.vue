<template> 
     <div id="headerHome">
                <div>   
                    <img draggable="false" id="containerLogo" src="./assets/Logo-Compasso-Preta.png" alt="imagem-compass">        
                </div>
                <div id="horarioDia"> 
                    <div id="horario"> 
                        <h1>00:00</h1>
                    </div>
                    <div id="Dia"> 
                        <p>terça-feira, 17 de março de 2020 </p>
                    </div>
                </div>
                <div id="CondicoesCllima">
                    <div id="Localizacao">   
                        <h1>teste</h1>
                    </div>
                    <div id="Clima"> 
                        <img draggable="false" alt="Icones Climaticos" src="">
                        <p>teste°</p>
                    </div>
                </div>
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import titleContent from '@/components/title/index.vue'
import Input from '@/components/input/index.vue'
    export default {
        name: 'headerHome',
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