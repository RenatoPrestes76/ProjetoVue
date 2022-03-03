<template>
  <main>
    <Header />
    <CentralContainer
      myTitle1="Título diz: PÁGINA HOME"
      myText1="Texto da página home."
    />
    <Footer />
  </main>
</template>

<script>
import CentralContainer from '@/containers/centralContainer/index.vue';
import Footer from '@/containers/footer/index.vue';
import Header from '@/containers/header/index.vue';
export default {
  name: 'Home',
  components: {
    CentralContainer,
    Footer,
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
