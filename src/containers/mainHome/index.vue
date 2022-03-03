<template>
   <div id="mainHome">      
                <div id="logoGrandeCompass">            
                    <img draggable="false" src="./assets/bola-LogoCompasso.png" alt="imagem-compass">        
                </div>
                <div id="text-msg">
                    <div id="boxParagrafo">                   
                        <h1>Our mission is</h1>
                        <p>Nossa missão é</p>
                        <h2>to transform the world</h2>
                        <p>transformar o mundo</p>
                        <h2>building digital experiences</h2>    
                        <p>construindo experiências digitais</p>                 
                        <h2>that enable our client's growth</h2>         
                        <p>que permitam o crescimento dos nossos clientes</p>
                    </div>
                </div>
            </div>
</template>

<script>
import TextContent from '@/components/textContent/index.vue';
import Title from '@/components/title/index.vue';
export default {
  name: 'mainHomeer',
  components: {
    TextContent,
    TitleContent,
  },
  props: {
    myText1: {
      type: String,
      default: 'CentralContainer',
    },
    myTitle1: {
      type: String,
      default: 'CentralContainer',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
