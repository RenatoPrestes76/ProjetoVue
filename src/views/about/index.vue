<template>
  <main>
    <Header />
    <CentralContainer
      myTitle1="Título diz: PÁGINA ABOUT"
      myText1="Texto da página about."
    />
    <Footer />
  </main>
</template>

<script>
import CentralContainer from '@/containers/centralContainer/index.vue';
import Footer from '@/containers/footer/index.vue';
import Header from '@/containers/header/index.vue';
export default {
  name: 'About',
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
